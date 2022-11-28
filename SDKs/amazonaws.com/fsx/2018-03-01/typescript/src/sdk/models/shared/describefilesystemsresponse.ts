import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystem } from "./filesystem";



// DescribeFileSystemsResponse
/** 
 * The response object for <code>DescribeFileSystems</code> operation.
**/
export class DescribeFileSystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystems", elemType: FileSystem })
  fileSystems?: FileSystem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
