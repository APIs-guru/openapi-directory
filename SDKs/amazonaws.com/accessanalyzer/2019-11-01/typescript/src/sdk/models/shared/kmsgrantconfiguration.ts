import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KmsGrantConstraints } from "./kmsgrantconstraints";
import { KmsGrantOperationEnum } from "./kmsgrantoperationenum";


// KmsGrantConfiguration
/** 
 * A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.
**/
export class KmsGrantConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraints" })
  constraints?: KmsGrantConstraints;

  @Metadata({ data: "json, name=granteePrincipal" })
  granteePrincipal: string;

  @Metadata({ data: "json, name=issuingAccount" })
  issuingAccount: string;

  @Metadata({ data: "json, name=operations" })
  operations: KmsGrantOperationEnum[];

  @Metadata({ data: "json, name=retiringPrincipal" })
  retiringPrincipal?: string;
}
