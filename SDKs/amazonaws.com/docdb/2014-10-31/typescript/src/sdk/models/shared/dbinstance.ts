import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { Endpoint } from "./endpoint";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { DbInstanceStatusInfo } from "./dbinstancestatusinfo";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// DbInstance
/** 
 * Detailed information about an instance. 
**/
export class DbInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceArn?: string;

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceStatus?: string;

  @SpeakeasyMetadata()
  dbSubnetGroup?: DbSubnetGroup;

  @SpeakeasyMetadata()
  dbiResourceId?: string;

  @SpeakeasyMetadata()
  enabledCloudwatchLogsExports?: string[];

  @SpeakeasyMetadata()
  endpoint?: Endpoint;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  instanceCreateTime?: Date;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  promotionTier?: number;

  @SpeakeasyMetadata()
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ elemType: DbInstanceStatusInfo })
  statusInfos?: DbInstanceStatusInfo[];

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
