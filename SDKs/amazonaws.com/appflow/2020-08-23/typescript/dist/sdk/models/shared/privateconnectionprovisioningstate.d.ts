import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateConnectionProvisioningFailureCauseEnum } from "./privateconnectionprovisioningfailurecauseenum";
import { PrivateConnectionProvisioningStatusEnum } from "./privateconnectionprovisioningstatusenum";
/**
 *  Specifies the private connection provisioning state.
**/
export declare class PrivateConnectionProvisioningState extends SpeakeasyBase {
    failureCause?: PrivateConnectionProvisioningFailureCauseEnum;
    failureMessage?: string;
    status?: PrivateConnectionProvisioningStatusEnum;
}
