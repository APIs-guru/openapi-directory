import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
import { Endpoint } from "./endpoint";
import { GlobalReplicationGroupInfo } from "./globalreplicationgroupinfo";
import { LogDeliveryConfiguration } from "./logdeliveryconfiguration";
import { MultiAzStatusEnum } from "./multiazstatusenum";
import { NodeGroup } from "./nodegroup";
import { ReplicationGroupPendingModifiedValues } from "./replicationgrouppendingmodifiedvalues";



// ReplicationGroup
/** 
 * Contains all of the attributes of a specific Redis replication group.
**/
export class ReplicationGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  atRestEncryptionEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenLastModifiedDate?: Date;

  @SpeakeasyMetadata()
  automaticFailover?: AutomaticFailoverStatusEnum;

  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  clusterEnabled?: boolean;

  @SpeakeasyMetadata()
  configurationEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  globalReplicationGroupInfo?: GlobalReplicationGroupInfo;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata({ elemType: LogDeliveryConfiguration })
  logDeliveryConfigurations?: LogDeliveryConfiguration[];

  @SpeakeasyMetadata()
  memberClusters?: string[];

  @SpeakeasyMetadata()
  memberClustersOutpostArns?: string[];

  @SpeakeasyMetadata()
  multiAz?: MultiAzStatusEnum;

  @SpeakeasyMetadata({ elemType: NodeGroup })
  nodeGroups?: NodeGroup[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: ReplicationGroupPendingModifiedValues;

  @SpeakeasyMetadata()
  replicationGroupCreateTime?: Date;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata()
  snapshotWindow?: string;

  @SpeakeasyMetadata()
  snapshottingClusterId?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  transitEncryptionEnabled?: boolean;

  @SpeakeasyMetadata()
  userGroupIds?: string[];
}
