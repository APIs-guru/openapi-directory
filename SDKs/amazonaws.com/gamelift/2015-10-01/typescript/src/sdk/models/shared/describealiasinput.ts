import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeAliasInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeAliasInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;
}
