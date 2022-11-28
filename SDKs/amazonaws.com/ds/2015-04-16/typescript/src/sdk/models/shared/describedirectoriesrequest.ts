import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeDirectoriesRequest
/** 
 * Contains the inputs for the <a>DescribeDirectories</a> operation.
**/
export class DescribeDirectoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryIds" })
  directoryIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
