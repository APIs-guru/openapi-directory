import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterRole } from "./dbclusterrole";
import { DbClusterMember } from "./dbclustermember";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
/**
 * Detailed information about a cluster.
**/
export declare class DbCluster extends SpeakeasyBase {
    associatedRoles?: DbClusterRole[];
    availabilityZones?: string[];
    backupRetentionPeriod?: number;
    clusterCreateTime?: Date;
    dbClusterArn?: string;
    dbClusterIdentifier?: string;
    dbClusterMembers?: DbClusterMember[];
    dbClusterParameterGroup?: string;
    dbSubnetGroup?: string;
    dbClusterResourceId?: string;
    deletionProtection?: boolean;
    earliestRestorableTime?: Date;
    enabledCloudwatchLogsExports?: string[];
    endpoint?: string;
    engine?: string;
    engineVersion?: string;
    hostedZoneId?: string;
    kmsKeyId?: string;
    latestRestorableTime?: Date;
    masterUsername?: string;
    multiAz?: boolean;
    percentProgress?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    readReplicaIdentifiers?: string[];
    readerEndpoint?: string;
    replicationSourceIdentifier?: string;
    status?: string;
    storageEncrypted?: boolean;
    vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
