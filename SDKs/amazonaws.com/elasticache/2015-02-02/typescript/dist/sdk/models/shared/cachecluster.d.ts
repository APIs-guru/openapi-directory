import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNode } from "./cachenode";
import { CacheParameterGroupStatus } from "./cacheparametergroupstatus";
import { CacheSecurityGroupMembership } from "./cachesecuritygroupmembership";
import { Endpoint } from "./endpoint";
import { LogDeliveryConfiguration } from "./logdeliveryconfiguration";
import { NotificationConfiguration } from "./notificationconfiguration";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { SecurityGroupMembership } from "./securitygroupmembership";
/**
 * Contains all of the attributes of a specific cluster.
**/
export declare class CacheCluster extends SpeakeasyBase {
    arn?: string;
    atRestEncryptionEnabled?: boolean;
    authTokenEnabled?: boolean;
    authTokenLastModifiedDate?: Date;
    autoMinorVersionUpgrade?: boolean;
    cacheClusterCreateTime?: Date;
    cacheClusterId?: string;
    cacheClusterStatus?: string;
    cacheNodeType?: string;
    cacheNodes?: CacheNode[];
    cacheParameterGroup?: CacheParameterGroupStatus;
    cacheSecurityGroups?: CacheSecurityGroupMembership[];
    cacheSubnetGroupName?: string;
    clientDownloadLandingPage?: string;
    configurationEndpoint?: Endpoint;
    engine?: string;
    engineVersion?: string;
    logDeliveryConfigurations?: LogDeliveryConfiguration[];
    notificationConfiguration?: NotificationConfiguration;
    numCacheNodes?: number;
    pendingModifiedValues?: PendingModifiedValues;
    preferredAvailabilityZone?: string;
    preferredMaintenanceWindow?: string;
    preferredOutpostArn?: string;
    replicationGroupId?: string;
    replicationGroupLogDeliveryEnabled?: boolean;
    securityGroups?: SecurityGroupMembership[];
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    transitEncryptionEnabled?: boolean;
}
