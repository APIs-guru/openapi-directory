import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileSystem } from "./filesystem";


// DescribeFileSystemsResponse
/** 
 * The response object for <code>DescribeFileSystems</code> operation.
**/
export class DescribeFileSystemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystems", elemType: shared.FileSystem })
  fileSystems?: FileSystem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
