import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteGitHubAccountTokenInput
/** 
 * Represents the input of a <code>DeleteGitHubAccount</code> operation.
**/
export class DeleteGitHubAccountTokenInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=tokenName" })
  tokenName?: string;
}
