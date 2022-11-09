import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteReplicaAction
/** 
 * Represents a replica to be removed.
**/
export class DeleteReplicaAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegionName" })
  regionName: string;
}
