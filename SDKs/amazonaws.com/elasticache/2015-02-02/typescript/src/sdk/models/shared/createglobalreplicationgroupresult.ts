import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalReplicationGroup } from "./globalreplicationgroup";



export class CreateGlobalReplicationGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalReplicationGroup?: GlobalReplicationGroup;
}
