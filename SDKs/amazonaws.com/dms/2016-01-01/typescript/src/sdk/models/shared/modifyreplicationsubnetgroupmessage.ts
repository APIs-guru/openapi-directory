import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyReplicationSubnetGroupMessage
/** 
 * <p/>
**/
export class ModifyReplicationSubnetGroupMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationSubnetGroupDescription" })
  replicationSubnetGroupDescription?: string;

  @Metadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];
}
