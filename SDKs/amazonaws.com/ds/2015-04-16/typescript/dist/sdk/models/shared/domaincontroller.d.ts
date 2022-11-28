import { SpeakeasyBase } from "../../../internal/utils";
import { DomainControllerStatusEnum } from "./domaincontrollerstatusenum";
/**
 * Contains information about the domain controllers for a specified directory.
**/
export declare class DomainController extends SpeakeasyBase {
    availabilityZone?: string;
    directoryId?: string;
    dnsIpAddr?: string;
    domainControllerId?: string;
    launchTime?: Date;
    status?: DomainControllerStatusEnum;
    statusLastUpdatedDateTime?: Date;
    statusReason?: string;
    subnetId?: string;
    vpcId?: string;
}
