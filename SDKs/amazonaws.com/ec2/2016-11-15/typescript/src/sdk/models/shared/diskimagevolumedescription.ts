import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskImageVolumeDescription
/** 
 * Describes a disk image volume.
**/
export class DiskImageVolumeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  size?: number;
}
