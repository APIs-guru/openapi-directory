import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroup } from "./replicationgroup";



export class TestFailoverResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  replicationGroup?: ReplicationGroup;
}
