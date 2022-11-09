import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VaultAccessPolicy } from "./vaultaccesspolicy";


// GetVaultAccessPolicyOutput
/** 
 * Output for GetVaultAccessPolicy.
**/
export class GetVaultAccessPolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: VaultAccessPolicy;
}
