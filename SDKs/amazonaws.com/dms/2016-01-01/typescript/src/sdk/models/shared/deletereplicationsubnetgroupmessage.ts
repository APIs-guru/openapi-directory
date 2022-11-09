import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteReplicationSubnetGroupMessage
/** 
 * <p/>
**/
export class DeleteReplicationSubnetGroupMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier: string;
}
