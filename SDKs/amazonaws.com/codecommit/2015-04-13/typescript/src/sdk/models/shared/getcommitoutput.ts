import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Commit } from "./commit";



// GetCommitOutput
/** 
 * Represents the output of a get commit operation.
**/
export class GetCommitOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit: Commit;
}
