import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceCertificateUpdateActionEnum } from "./devicecertificateupdateactionenum";
/**
 * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
**/
export declare class UpdateDeviceCertificateParams extends SpeakeasyBase {
    action: DeviceCertificateUpdateActionEnum;
}
