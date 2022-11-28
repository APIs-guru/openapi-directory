import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteReplicationSubnetGroupMessage
/** 
 * <p/>
**/
export class DeleteReplicationSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier: string;
}
