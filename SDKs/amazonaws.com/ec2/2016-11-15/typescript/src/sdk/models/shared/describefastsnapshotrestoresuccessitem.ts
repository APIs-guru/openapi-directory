import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FastSnapshotRestoreStateCodeEnum } from "./fastsnapshotrestorestatecodeenum";



// DescribeFastSnapshotRestoreSuccessItem
/** 
 * Describes fast snapshot restores for a snapshot.
**/
export class DescribeFastSnapshotRestoreSuccessItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  disabledTime?: Date;

  @SpeakeasyMetadata()
  disablingTime?: Date;

  @SpeakeasyMetadata()
  enabledTime?: Date;

  @SpeakeasyMetadata()
  enablingTime?: Date;

  @SpeakeasyMetadata()
  optimizingTime?: Date;

  @SpeakeasyMetadata()
  ownerAlias?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata()
  state?: FastSnapshotRestoreStateCodeEnum;

  @SpeakeasyMetadata()
  stateTransitionReason?: string;
}
