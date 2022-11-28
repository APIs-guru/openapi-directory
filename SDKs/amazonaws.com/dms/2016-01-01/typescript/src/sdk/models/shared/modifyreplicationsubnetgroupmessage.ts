import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyReplicationSubnetGroupMessage
/** 
 * <p/>
**/
export class ModifyReplicationSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroupDescription" })
  replicationSubnetGroupDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];
}
