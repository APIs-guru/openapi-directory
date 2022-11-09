import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateReplicaAction
/** 
 * Represents a replica to be added.
**/
export class CreateReplicaAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegionName" })
  regionName: string;
}
