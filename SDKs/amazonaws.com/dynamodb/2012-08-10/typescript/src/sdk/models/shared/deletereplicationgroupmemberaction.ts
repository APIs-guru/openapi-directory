import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteReplicationGroupMemberAction
/** 
 * Represents a replica to be deleted.
**/
export class DeleteReplicationGroupMemberAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;
}
