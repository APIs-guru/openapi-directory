import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotStateEnum } from "./snapshotstateenum";
import { Tag } from "./tag";



// Snapshot
/** 
 * Describes a snapshot.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dataEncryptionKeyId?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  ownerAlias?: string;

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

  @SpeakeasyMetadata()
  stateMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  volumeId?: string;

  @SpeakeasyMetadata()
  volumeSize?: number;
}
