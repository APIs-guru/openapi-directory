import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResolveAliasInput
/** 
 * Represents the input for a request operation.
**/
export class ResolveAliasInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId: string;
}
