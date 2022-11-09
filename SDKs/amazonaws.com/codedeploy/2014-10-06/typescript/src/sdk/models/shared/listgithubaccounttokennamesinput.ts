import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListGitHubAccountTokenNamesInput
/** 
 * Represents the input of a <code>ListGitHubAccountTokenNames</code> operation.
**/
export class ListGitHubAccountTokenNamesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
