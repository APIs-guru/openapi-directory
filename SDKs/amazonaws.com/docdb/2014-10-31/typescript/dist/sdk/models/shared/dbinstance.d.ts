import { SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { Endpoint } from "./endpoint";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { DbInstanceStatusInfo } from "./dbinstancestatusinfo";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
/**
 * Detailed information about an instance.
**/
export declare class DbInstance extends SpeakeasyBase {
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    dbClusterIdentifier?: string;
    dbInstanceArn?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbInstanceStatus?: string;
    dbSubnetGroup?: DbSubnetGroup;
    dbiResourceId?: string;
    enabledCloudwatchLogsExports?: string[];
    endpoint?: Endpoint;
    engine?: string;
    engineVersion?: string;
    instanceCreateTime?: Date;
    kmsKeyId?: string;
    latestRestorableTime?: Date;
    pendingModifiedValues?: PendingModifiedValues;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    promotionTier?: number;
    publiclyAccessible?: boolean;
    statusInfos?: DbInstanceStatusInfo[];
    storageEncrypted?: boolean;
    vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
