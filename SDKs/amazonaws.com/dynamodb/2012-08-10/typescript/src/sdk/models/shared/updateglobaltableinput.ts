import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaUpdate } from "./replicaupdate";



export class UpdateGlobalTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaUpdates", elemType: ReplicaUpdate })
  replicaUpdates: ReplicaUpdate[];
}
