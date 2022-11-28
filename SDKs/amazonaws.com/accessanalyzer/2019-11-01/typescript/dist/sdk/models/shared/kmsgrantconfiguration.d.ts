import { SpeakeasyBase } from "../../../internal/utils";
import { KmsGrantConstraints } from "./kmsgrantconstraints";
import { KmsGrantOperationEnum } from "./kmsgrantoperationenum";
/**
 * A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.
**/
export declare class KmsGrantConfiguration extends SpeakeasyBase {
    constraints?: KmsGrantConstraints;
    granteePrincipal: string;
    issuingAccount: string;
    operations: KmsGrantOperationEnum[];
    retiringPrincipal?: string;
}
