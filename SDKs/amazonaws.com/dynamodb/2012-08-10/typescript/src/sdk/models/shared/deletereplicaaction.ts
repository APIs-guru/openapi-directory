import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteReplicaAction
/** 
 * Represents a replica to be removed.
**/
export class DeleteReplicaAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;
}
