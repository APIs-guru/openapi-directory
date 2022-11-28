import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateReplicaAction
/** 
 * Represents a replica to be added.
**/
export class CreateReplicaAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;
}
