import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Run } from "./run";



// ScheduleRunResult
/** 
 * Represents the result of a schedule run request.
**/
export class ScheduleRunResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: Run;
}
