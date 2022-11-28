import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalReplicationGroup } from "./globalreplicationgroup";



export class FailoverGlobalReplicationGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalReplicationGroup?: GlobalReplicationGroup;
}
