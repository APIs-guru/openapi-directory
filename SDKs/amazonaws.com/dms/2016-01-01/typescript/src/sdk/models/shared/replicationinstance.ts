import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationPendingModifiedValues } from "./replicationpendingmodifiedvalues";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";


// ReplicationInstance
/** 
 * Provides information that defines a replication instance.
**/
export class ReplicationInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=DnsNameServers" })
  dnsNameServers?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=FreeUntil" })
  freeUntil?: Date;

  @Metadata({ data: "json, name=InstanceCreateTime" })
  instanceCreateTime?: Date;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "json, name=PendingModifiedValues" })
  pendingModifiedValues?: ReplicationPendingModifiedValues;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @Metadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass?: string;

  @Metadata({ data: "json, name=ReplicationInstanceIdentifier" })
  replicationInstanceIdentifier?: string;

  @Metadata({ data: "json, name=ReplicationInstancePrivateIpAddress" })
  replicationInstancePrivateIpAddress?: string;

  @Metadata({ data: "json, name=ReplicationInstancePrivateIpAddresses" })
  replicationInstancePrivateIpAddresses?: string[];

  @Metadata({ data: "json, name=ReplicationInstancePublicIpAddress" })
  replicationInstancePublicIpAddress?: string;

  @Metadata({ data: "json, name=ReplicationInstancePublicIpAddresses" })
  replicationInstancePublicIpAddresses?: string[];

  @Metadata({ data: "json, name=ReplicationInstanceStatus" })
  replicationInstanceStatus?: string;

  @Metadata({ data: "json, name=ReplicationSubnetGroup" })
  replicationSubnetGroup?: ReplicationSubnetGroup;

  @Metadata({ data: "json, name=SecondaryAvailabilityZone" })
  secondaryAvailabilityZone?: string;

  @Metadata({ data: "json, name=VpcSecurityGroups", elemType: shared.VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
