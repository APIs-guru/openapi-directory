import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// CreateReplicationSubnetGroupMessage
/** 
 * <p/>
**/
export class CreateReplicationSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroupDescription" })
  replicationSubnetGroupDescription: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
