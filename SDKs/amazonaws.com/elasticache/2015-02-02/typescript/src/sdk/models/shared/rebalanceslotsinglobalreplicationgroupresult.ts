import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalReplicationGroup } from "./globalreplicationgroup";



export class RebalanceSlotsInGlobalReplicationGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalReplicationGroup?: GlobalReplicationGroup;
}
