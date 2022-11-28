import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroup } from "./replicationgroup";



export class IncreaseReplicaCountResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  replicationGroup?: ReplicationGroup;
}
