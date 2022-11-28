import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an AD Connector directory.
**/
export declare class DirectoryConnectSettingsDescription extends SpeakeasyBase {
    availabilityZones?: string[];
    connectIps?: string[];
    customerUserName?: string;
    securityGroupId?: string;
    subnetIds?: string[];
    vpcId?: string;
}
