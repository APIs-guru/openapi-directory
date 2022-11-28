import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
import { NodeSnapshot } from "./nodesnapshot";



// Snapshot
/** 
 * Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  automaticFailover?: AutomaticFailoverStatusEnum;

  @SpeakeasyMetadata()
  cacheClusterCreateTime?: Date;

  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  cacheParameterGroupName?: string;

  @SpeakeasyMetadata()
  cacheSubnetGroupName?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata({ elemType: NodeSnapshot })
  nodeSnapshots?: NodeSnapshot[];

  @SpeakeasyMetadata()
  numCacheNodes?: number;

  @SpeakeasyMetadata()
  numNodeGroups?: number;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  preferredAvailabilityZone?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  preferredOutpostArn?: string;

  @SpeakeasyMetadata()
  replicationGroupDescription?: string;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  snapshotName?: string;

  @SpeakeasyMetadata()
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata()
  snapshotSource?: string;

  @SpeakeasyMetadata()
  snapshotStatus?: string;

  @SpeakeasyMetadata()
  snapshotWindow?: string;

  @SpeakeasyMetadata()
  topicArn?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
