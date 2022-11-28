import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroup } from "./replicationgroup";



export class ModifyReplicationGroupShardConfigurationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  replicationGroup?: ReplicationGroup;
}
