import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFileSystemAliasesRequest
/** 
 * The request object for <code>DescribeFileSystemAliases</code> operation.
**/
export class DescribeFileSystemAliasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
