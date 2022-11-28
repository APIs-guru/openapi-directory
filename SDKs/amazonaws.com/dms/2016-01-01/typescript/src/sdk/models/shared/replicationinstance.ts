import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationPendingModifiedValues } from "./replicationpendingmodifiedvalues";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// ReplicationInstance
/** 
 * Provides information that defines a replication instance.
**/
export class ReplicationInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsNameServers" })
  dnsNameServers?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=FreeUntil" })
  freeUntil?: Date;

  @SpeakeasyMetadata({ data: "json, name=InstanceCreateTime" })
  instanceCreateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PendingModifiedValues" })
  pendingModifiedValues?: ReplicationPendingModifiedValues;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceIdentifier" })
  replicationInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstancePrivateIpAddress" })
  replicationInstancePrivateIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstancePrivateIpAddresses" })
  replicationInstancePrivateIpAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstancePublicIpAddress" })
  replicationInstancePublicIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstancePublicIpAddresses" })
  replicationInstancePublicIpAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceStatus" })
  replicationInstanceStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroup" })
  replicationSubnetGroup?: ReplicationSubnetGroup;

  @SpeakeasyMetadata({ data: "json, name=SecondaryAvailabilityZone" })
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroups", elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
