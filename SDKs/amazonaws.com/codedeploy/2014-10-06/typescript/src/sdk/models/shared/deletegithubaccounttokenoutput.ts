import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteGitHubAccountTokenOutput
/** 
 * Represents the output of a <code>DeleteGitHubAccountToken</code> operation.
**/
export class DeleteGitHubAccountTokenOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tokenName" })
  tokenName?: string;
}
