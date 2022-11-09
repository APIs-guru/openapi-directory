import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalTableStatusEnum } from "./globaltablestatusenum";
import { ReplicaDescription } from "./replicadescription";


// GlobalTableDescription
/** 
 * Contains details about the global table.
**/
export class GlobalTableDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=GlobalTableArn" })
  globalTableArn?: string;

  @Metadata({ data: "json, name=GlobalTableName" })
  globalTableName?: string;

  @Metadata({ data: "json, name=GlobalTableStatus" })
  globalTableStatus?: GlobalTableStatusEnum;

  @Metadata({ data: "json, name=ReplicationGroup", elemType: shared.ReplicaDescription })
  replicationGroup?: ReplicaDescription[];
}
