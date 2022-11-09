import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeDirectoriesRequest
/** 
 * Contains the inputs for the <a>DescribeDirectories</a> operation.
**/
export class DescribeDirectoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryIds" })
  directoryIds?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
