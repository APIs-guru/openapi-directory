import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VaultAccessPolicy
/** 
 * Contains the vault access policy.
**/
export class VaultAccessPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: string;
}
