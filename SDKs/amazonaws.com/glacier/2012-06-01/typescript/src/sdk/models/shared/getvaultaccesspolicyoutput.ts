import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VaultAccessPolicy } from "./vaultaccesspolicy";



// GetVaultAccessPolicyOutput
/** 
 * Output for GetVaultAccessPolicy.
**/
export class GetVaultAccessPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: VaultAccessPolicy;
}
