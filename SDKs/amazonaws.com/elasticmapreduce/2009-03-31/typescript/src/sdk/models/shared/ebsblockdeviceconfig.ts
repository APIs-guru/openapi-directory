import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeSpecification } from "./volumespecification";



// EbsBlockDeviceConfig
/** 
 * Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.
**/
export class EbsBlockDeviceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VolumeSpecification" })
  volumeSpecification: VolumeSpecification;

  @SpeakeasyMetadata({ data: "json, name=VolumesPerInstance" })
  volumesPerInstance?: number;
}
