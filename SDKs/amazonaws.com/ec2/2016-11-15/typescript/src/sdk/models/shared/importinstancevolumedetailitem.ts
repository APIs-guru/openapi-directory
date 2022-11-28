import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskImageDescription } from "./diskimagedescription";
import { DiskImageVolumeDescription } from "./diskimagevolumedescription";



// ImportInstanceVolumeDetailItem
/** 
 * Describes an import volume task.
**/
export class ImportInstanceVolumeDetailItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  bytesConverted?: number;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  image?: DiskImageDescription;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata()
  volume?: DiskImageVolumeDescription;
}
