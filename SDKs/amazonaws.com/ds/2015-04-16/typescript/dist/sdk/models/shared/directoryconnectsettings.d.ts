import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
**/
export declare class DirectoryConnectSettings extends SpeakeasyBase {
    customerDnsIps: string[];
    customerUserName: string;
    subnetIds: string[];
    vpcId: string;
}
