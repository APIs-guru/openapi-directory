import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaUpdate } from "./replicaupdate";


export class UpdateGlobalTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;

  @Metadata({ data: "json, name=ReplicaUpdates", elemType: shared.ReplicaUpdate })
  replicaUpdates: ReplicaUpdate[];
}
