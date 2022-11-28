import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteAliasInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteAliasInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId: string;
}
