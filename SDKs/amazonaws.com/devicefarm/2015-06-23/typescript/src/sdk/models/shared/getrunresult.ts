import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Run } from "./run";


// GetRunResult
/** 
 * Represents the result of a get run request.
**/
export class GetRunResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=run" })
  run?: Run;
}
