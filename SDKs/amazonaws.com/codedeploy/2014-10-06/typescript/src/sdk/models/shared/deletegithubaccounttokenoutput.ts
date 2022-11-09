import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteGitHubAccountTokenOutput
/** 
 * Represents the output of a <code>DeleteGitHubAccountToken</code> operation.
**/
export class DeleteGitHubAccountTokenOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=tokenName" })
  tokenName?: string;
}
