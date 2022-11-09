import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Run } from "./run";


// StopRunResult
/** 
 * Represents the results of your stop run attempt.
**/
export class StopRunResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=run" })
  run?: Run;
}
