import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFileSystemAliasesRequest
/** 
 * The request object for <code>DescribeFileSystemAliases</code> operation.
**/
export class DescribeFileSystemAliasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
