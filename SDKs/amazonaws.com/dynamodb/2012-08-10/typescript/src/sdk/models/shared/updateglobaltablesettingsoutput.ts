import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaSettingsDescription } from "./replicasettingsdescription";


export class UpdateGlobalTableSettingsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTableName" })
  globalTableName?: string;

  @Metadata({ data: "json, name=ReplicaSettings", elemType: shared.ReplicaSettingsDescription })
  replicaSettings?: ReplicaSettingsDescription[];
}
