import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alias } from "./alias";


// DescribeFileSystemAliasesResponse
/** 
 * The response object for <code>DescribeFileSystemAliases</code> operation.
**/
export class DescribeFileSystemAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aliases", elemType: shared.Alias })
  aliases?: Alias[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
