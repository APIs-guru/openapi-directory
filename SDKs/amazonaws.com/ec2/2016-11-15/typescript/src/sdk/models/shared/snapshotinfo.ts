import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotStateEnum } from "./snapshotstateenum";
import { Tag } from "./tag";



// SnapshotInfo
/** 
 * Information about a snapshot.
**/
export class SnapshotInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  progress?: string;

  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  state?: SnapshotStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  volumeId?: string;

  @SpeakeasyMetadata()
  volumeSize?: number;
}
