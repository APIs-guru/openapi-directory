import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListGitHubAccountTokenNamesOutput
/** 
 * Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.
**/
export class ListGitHubAccountTokenNamesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenNameList" })
  tokenNameList?: string[];
}
