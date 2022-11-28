import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroup } from "./replicationgroup";



export class ModifyReplicationGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  replicationGroup?: ReplicationGroup;
}
