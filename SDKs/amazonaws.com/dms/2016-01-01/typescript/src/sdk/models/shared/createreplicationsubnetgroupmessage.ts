import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// CreateReplicationSubnetGroupMessage
/** 
 * <p/>
**/
export class CreateReplicationSubnetGroupMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationSubnetGroupDescription" })
  replicationSubnetGroupDescription: string;

  @Metadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
