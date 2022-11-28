import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";



// DescribeFileSystemAliasesResponse
/** 
 * The response object for <code>DescribeFileSystemAliases</code> operation.
**/
export class DescribeFileSystemAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aliases", elemType: Alias })
  aliases?: Alias[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
