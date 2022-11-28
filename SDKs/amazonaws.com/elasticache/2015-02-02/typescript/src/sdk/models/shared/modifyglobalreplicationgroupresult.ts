import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalReplicationGroup } from "./globalreplicationgroup";



export class ModifyGlobalReplicationGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalReplicationGroup?: GlobalReplicationGroup;
}
