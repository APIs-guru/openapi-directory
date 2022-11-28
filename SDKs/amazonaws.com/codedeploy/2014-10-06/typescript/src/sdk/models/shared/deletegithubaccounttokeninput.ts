import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteGitHubAccountTokenInput
/** 
 * Represents the input of a <code>DeleteGitHubAccount</code> operation.
**/
export class DeleteGitHubAccountTokenInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tokenName" })
  tokenName?: string;
}
