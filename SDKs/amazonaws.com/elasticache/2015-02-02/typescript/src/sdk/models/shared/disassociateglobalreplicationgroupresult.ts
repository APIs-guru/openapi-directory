import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalReplicationGroup } from "./globalreplicationgroup";



export class DisassociateGlobalReplicationGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalReplicationGroup?: GlobalReplicationGroup;
}
