import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroup } from "./replicationgroup";



export class DeleteReplicationGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  replicationGroup?: ReplicationGroup;
}
