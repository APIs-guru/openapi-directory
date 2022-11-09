import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateReplicationGroupMemberAction } from "./createreplicationgroupmemberaction";
import { DeleteReplicationGroupMemberAction } from "./deletereplicationgroupmemberaction";
import { UpdateReplicationGroupMemberAction } from "./updatereplicationgroupmemberaction";


// ReplicationGroupUpdate
/** 
 * <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul>
**/
export class ReplicationGroupUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Create" })
  create?: CreateReplicationGroupMemberAction;

  @Metadata({ data: "json, name=Delete" })
  delete?: DeleteReplicationGroupMemberAction;

  @Metadata({ data: "json, name=Update" })
  update?: UpdateReplicationGroupMemberAction;
}
