import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheNode } from "./cachenode";
import { CacheParameterGroupStatus } from "./cacheparametergroupstatus";
import { CacheSecurityGroupMembership } from "./cachesecuritygroupmembership";
import { Endpoint } from "./endpoint";
import { LogDeliveryConfiguration } from "./logdeliveryconfiguration";
import { NotificationConfiguration } from "./notificationconfiguration";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { SecurityGroupMembership } from "./securitygroupmembership";



// CacheCluster
/** 
 * Contains all of the attributes of a specific cluster.
**/
export class CacheCluster extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  atRestEncryptionEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenLastModifiedDate?: Date;

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  cacheClusterCreateTime?: Date;

  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  cacheClusterStatus?: string;

  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata({ elemType: CacheNode })
  cacheNodes?: CacheNode[];

  @SpeakeasyMetadata()
  cacheParameterGroup?: CacheParameterGroupStatus;

  @SpeakeasyMetadata({ elemType: CacheSecurityGroupMembership })
  cacheSecurityGroups?: CacheSecurityGroupMembership[];

  @SpeakeasyMetadata()
  cacheSubnetGroupName?: string;

  @SpeakeasyMetadata()
  clientDownloadLandingPage?: string;

  @SpeakeasyMetadata()
  configurationEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata({ elemType: LogDeliveryConfiguration })
  logDeliveryConfigurations?: LogDeliveryConfiguration[];

  @SpeakeasyMetadata()
  notificationConfiguration?: NotificationConfiguration;

  @SpeakeasyMetadata()
  numCacheNodes?: number;

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  preferredAvailabilityZone?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  preferredOutpostArn?: string;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  replicationGroupLogDeliveryEnabled?: boolean;

  @SpeakeasyMetadata({ elemType: SecurityGroupMembership })
  securityGroups?: SecurityGroupMembership[];

  @SpeakeasyMetadata()
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata()
  snapshotWindow?: string;

  @SpeakeasyMetadata()
  transitEncryptionEnabled?: boolean;
}
