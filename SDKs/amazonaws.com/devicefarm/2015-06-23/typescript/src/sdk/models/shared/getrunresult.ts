import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Run } from "./run";



// GetRunResult
/** 
 * Represents the result of a get run request.
**/
export class GetRunResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: Run;
}
