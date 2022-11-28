import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// CreateReplicationInstanceMessage
/** 
 * <p/>
**/
export class CreateReplicationInstanceMessage extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceIdentifier" })
  replicationInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}
