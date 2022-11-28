import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskImageFormatEnum } from "./diskimageformatenum";



// DiskImageDescription
/** 
 * Describes a disk image.
**/
export class DiskImageDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checksum?: string;

  @SpeakeasyMetadata()
  format?: DiskImageFormatEnum;

  @SpeakeasyMetadata()
  importManifestUrl?: string;

  @SpeakeasyMetadata()
  size?: number;
}
