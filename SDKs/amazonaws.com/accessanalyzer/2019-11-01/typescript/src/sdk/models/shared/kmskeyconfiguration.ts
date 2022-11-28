import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KmsGrantConfiguration } from "./kmsgrantconfiguration";



// KmsKeyConfiguration
/** 
 * <p>Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>. For more information about key policy limits, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource quotas</a>.</p> <p/>
**/
export class KmsKeyConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grants", elemType: KmsGrantConfiguration })
  grants?: KmsGrantConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=keyPolicies" })
  keyPolicies?: Map<string, string>;
}
