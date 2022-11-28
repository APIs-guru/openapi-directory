import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeSpecification } from "./volumespecification";



// EbsBlockDevice
/** 
 * Configuration of requested EBS block device associated with the instance group.
**/
export class EbsBlockDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeSpecification" })
  volumeSpecification?: VolumeSpecification;
}
