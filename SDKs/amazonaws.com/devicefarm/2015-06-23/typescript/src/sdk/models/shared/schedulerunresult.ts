import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Run } from "./run";


// ScheduleRunResult
/** 
 * Represents the result of a schedule run request.
**/
export class ScheduleRunResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=run" })
  run?: Run;
}
