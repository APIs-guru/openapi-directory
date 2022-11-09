import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFileSystemsRequest
/** 
 * The request object for <code>DescribeFileSystems</code> operation.
**/
export class DescribeFileSystemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystemIds" })
  fileSystemIds?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
