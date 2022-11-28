import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterRole } from "./dbclusterrole";
import { DbClusterMember } from "./dbclustermember";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// DbCluster
/** 
 * Detailed information about a cluster. 
**/
export class DbCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterRole })
  associatedRoles?: DbClusterRole[];

  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  dbClusterArn?: string;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata({ elemType: DbClusterMember })
  dbClusterMembers?: DbClusterMember[];

  @SpeakeasyMetadata()
  dbClusterParameterGroup?: string;

  @SpeakeasyMetadata()
  dbSubnetGroup?: string;

  @SpeakeasyMetadata()
  dbClusterResourceId?: string;

  @SpeakeasyMetadata()
  deletionProtection?: boolean;

  @SpeakeasyMetadata()
  earliestRestorableTime?: Date;

  @SpeakeasyMetadata()
  enabledCloudwatchLogsExports?: string[];

  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  hostedZoneId?: string;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  percentProgress?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  readReplicaIdentifiers?: string[];

  @SpeakeasyMetadata()
  readerEndpoint?: string;

  @SpeakeasyMetadata()
  replicationSourceIdentifier?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
