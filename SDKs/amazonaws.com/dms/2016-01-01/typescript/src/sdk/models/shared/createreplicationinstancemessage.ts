import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// CreateReplicationInstanceMessage
/** 
 * <p/>
**/
export class CreateReplicationInstanceMessage extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass: string;

  @Metadata({ data: "json, name=ReplicationInstanceIdentifier" })
  replicationInstanceIdentifier: string;

  @Metadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier?: string;

  @Metadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}
