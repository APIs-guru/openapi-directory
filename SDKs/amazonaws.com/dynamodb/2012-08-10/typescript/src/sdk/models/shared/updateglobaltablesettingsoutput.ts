import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaSettingsDescription } from "./replicasettingsdescription";



export class UpdateGlobalTableSettingsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableName" })
  globalTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaSettings", elemType: ReplicaSettingsDescription })
  replicaSettings?: ReplicaSettingsDescription[];
}
