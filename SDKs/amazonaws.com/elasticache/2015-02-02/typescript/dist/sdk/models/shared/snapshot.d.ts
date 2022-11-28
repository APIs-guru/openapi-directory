import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
import { NodeSnapshot } from "./nodesnapshot";
/**
 * Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
**/
export declare class Snapshot extends SpeakeasyBase {
    arn?: string;
    autoMinorVersionUpgrade?: boolean;
    automaticFailover?: AutomaticFailoverStatusEnum;
    cacheClusterCreateTime?: Date;
    cacheClusterId?: string;
    cacheNodeType?: string;
    cacheParameterGroupName?: string;
    cacheSubnetGroupName?: string;
    engine?: string;
    engineVersion?: string;
    kmsKeyId?: string;
    nodeSnapshots?: NodeSnapshot[];
    numCacheNodes?: number;
    numNodeGroups?: number;
    port?: number;
    preferredAvailabilityZone?: string;
    preferredMaintenanceWindow?: string;
    preferredOutpostArn?: string;
    replicationGroupDescription?: string;
    replicationGroupId?: string;
    snapshotName?: string;
    snapshotRetentionLimit?: number;
    snapshotSource?: string;
    snapshotStatus?: string;
    snapshotWindow?: string;
    topicArn?: string;
    vpcId?: string;
}
