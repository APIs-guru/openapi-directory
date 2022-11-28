import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * <p/>
**/
export declare class CreateReplicationInstanceMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dnsNameServers?: string;
    engineVersion?: string;
    kmsKeyId?: string;
    multiAz?: boolean;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    replicationInstanceClass: string;
    replicationInstanceIdentifier: string;
    replicationSubnetGroupIdentifier?: string;
    resourceIdentifier?: string;
    tags?: Tag[];
    vpcSecurityGroupIds?: string[];
}
