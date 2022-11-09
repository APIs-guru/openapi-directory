import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Commit } from "./commit";


// GetCommitOutput
/** 
 * Represents the output of a get commit operation.
**/
export class GetCommitOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit" })
  commit: Commit;
}
