import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFileSystemsRequest
/** 
 * The request object for <code>DescribeFileSystems</code> operation.
**/
export class DescribeFileSystemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystemIds" })
  fileSystemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
