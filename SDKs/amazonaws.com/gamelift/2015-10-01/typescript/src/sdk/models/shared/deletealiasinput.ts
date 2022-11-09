import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteAliasInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteAliasInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;
}
