import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the physical requirements for a connection.
**/
export declare class PhysicalConnectionRequirements extends SpeakeasyBase {
    availabilityZone?: string;
    securityGroupIdList?: string[];
    subnetId?: string;
}
