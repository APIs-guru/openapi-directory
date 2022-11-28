import { SpeakeasyBase } from "../../../internal/utils";
import { CaCertificateUpdateActionEnum } from "./cacertificateupdateactionenum";
/**
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
**/
export declare class UpdateCaCertificateParams extends SpeakeasyBase {
    action: CaCertificateUpdateActionEnum;
}
