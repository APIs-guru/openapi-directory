import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeAliasInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeAliasInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId: string;
}
