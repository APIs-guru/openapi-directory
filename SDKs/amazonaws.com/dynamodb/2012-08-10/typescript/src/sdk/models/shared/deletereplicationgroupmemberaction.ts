import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteReplicationGroupMemberAction
/** 
 * Represents a replica to be deleted.
**/
export class DeleteReplicationGroupMemberAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegionName" })
  regionName: string;
}
