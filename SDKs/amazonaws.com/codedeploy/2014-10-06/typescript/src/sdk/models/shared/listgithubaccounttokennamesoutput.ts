import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListGitHubAccountTokenNamesOutput
/** 
 * Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.
**/
export class ListGitHubAccountTokenNamesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tokenNameList" })
  tokenNameList?: string[];
}
