import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VaultAccessPolicy
/** 
 * Contains the vault access policy.
**/
export class VaultAccessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;
}
