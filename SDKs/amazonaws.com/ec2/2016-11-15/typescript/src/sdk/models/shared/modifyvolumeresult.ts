import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeModification } from "./volumemodification";



export class ModifyVolumeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  volumeModification?: VolumeModification;
}
