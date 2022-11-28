import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskImageDescription } from "./diskimagedescription";
import { DiskImageVolumeDescription } from "./diskimagevolumedescription";



// ImportVolumeTaskDetails
/** 
 * Describes an import volume task.
**/
export class ImportVolumeTaskDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  bytesConverted?: number;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  image?: DiskImageDescription;

  @SpeakeasyMetadata()
  volume?: DiskImageVolumeDescription;
}
