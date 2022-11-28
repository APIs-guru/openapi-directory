import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeModification } from "./volumemodification";



export class DescribeVolumesModificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: VolumeModification })
  volumesModifications?: VolumeModification[];
}
