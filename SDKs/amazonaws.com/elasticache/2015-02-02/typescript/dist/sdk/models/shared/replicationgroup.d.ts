import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
import { Endpoint } from "./endpoint";
import { GlobalReplicationGroupInfo } from "./globalreplicationgroupinfo";
import { LogDeliveryConfiguration } from "./logdeliveryconfiguration";
import { MultiAzStatusEnum } from "./multiazstatusenum";
import { NodeGroup } from "./nodegroup";
import { ReplicationGroupPendingModifiedValues } from "./replicationgrouppendingmodifiedvalues";
/**
 * Contains all of the attributes of a specific Redis replication group.
**/
export declare class ReplicationGroup extends SpeakeasyBase {
    arn?: string;
    atRestEncryptionEnabled?: boolean;
    authTokenEnabled?: boolean;
    authTokenLastModifiedDate?: Date;
    automaticFailover?: AutomaticFailoverStatusEnum;
    cacheNodeType?: string;
    clusterEnabled?: boolean;
    configurationEndpoint?: Endpoint;
    description?: string;
    globalReplicationGroupInfo?: GlobalReplicationGroupInfo;
    kmsKeyId?: string;
    logDeliveryConfigurations?: LogDeliveryConfiguration[];
    memberClusters?: string[];
    memberClustersOutpostArns?: string[];
    multiAz?: MultiAzStatusEnum;
    nodeGroups?: NodeGroup[];
    pendingModifiedValues?: ReplicationGroupPendingModifiedValues;
    replicationGroupCreateTime?: Date;
    replicationGroupId?: string;
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    snapshottingClusterId?: string;
    status?: string;
    transitEncryptionEnabled?: boolean;
    userGroupIds?: string[];
}
