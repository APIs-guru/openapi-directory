import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KmsGrantConstraints } from "./kmsgrantconstraints";
import { KmsGrantOperationEnum } from "./kmsgrantoperationenum";



// KmsGrantConfiguration
/** 
 * A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.
**/
export class KmsGrantConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: KmsGrantConstraints;

  @SpeakeasyMetadata({ data: "json, name=granteePrincipal" })
  granteePrincipal: string;

  @SpeakeasyMetadata({ data: "json, name=issuingAccount" })
  issuingAccount: string;

  @SpeakeasyMetadata({ data: "json, name=operations" })
  operations: KmsGrantOperationEnum[];

  @SpeakeasyMetadata({ data: "json, name=retiringPrincipal" })
  retiringPrincipal?: string;
}
