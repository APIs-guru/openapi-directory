import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



export class DeleteSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  snapshot?: Snapshot;
}
