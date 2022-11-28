import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListGitHubAccountTokenNamesInput
/** 
 * Represents the input of a <code>ListGitHubAccountTokenNames</code> operation.
**/
export class ListGitHubAccountTokenNamesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
