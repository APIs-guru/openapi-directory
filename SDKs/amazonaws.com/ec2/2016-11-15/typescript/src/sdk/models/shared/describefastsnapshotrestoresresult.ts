import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeFastSnapshotRestoreSuccessItem } from "./describefastsnapshotrestoresuccessitem";



export class DescribeFastSnapshotRestoresResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DescribeFastSnapshotRestoreSuccessItem })
  fastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
