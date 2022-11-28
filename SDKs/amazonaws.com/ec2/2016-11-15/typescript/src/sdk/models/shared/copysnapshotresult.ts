import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CopySnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
