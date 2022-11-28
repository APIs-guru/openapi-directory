import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Run } from "./run";



// StopRunResult
/** 
 * Represents the results of your stop run attempt.
**/
export class StopRunResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: Run;
}
