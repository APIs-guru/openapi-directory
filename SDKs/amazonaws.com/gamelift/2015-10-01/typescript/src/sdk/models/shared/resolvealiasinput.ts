import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResolveAliasInput
/** 
 * Represents the input for a request operation.
**/
export class ResolveAliasInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;
}
