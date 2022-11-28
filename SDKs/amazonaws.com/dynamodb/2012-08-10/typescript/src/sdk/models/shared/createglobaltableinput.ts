import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Replica } from "./replica";



export class CreateGlobalTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationGroup", elemType: Replica })
  replicationGroup: Replica[];
}
