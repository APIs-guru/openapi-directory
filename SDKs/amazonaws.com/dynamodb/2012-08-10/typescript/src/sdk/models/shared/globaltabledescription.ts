import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalTableStatusEnum } from "./globaltablestatusenum";
import { ReplicaDescription } from "./replicadescription";



// GlobalTableDescription
/** 
 * Contains details about the global table.
**/
export class GlobalTableDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=GlobalTableArn" })
  globalTableArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GlobalTableName" })
  globalTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=GlobalTableStatus" })
  globalTableStatus?: GlobalTableStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ReplicationGroup", elemType: ReplicaDescription })
  replicationGroup?: ReplicaDescription[];
}
