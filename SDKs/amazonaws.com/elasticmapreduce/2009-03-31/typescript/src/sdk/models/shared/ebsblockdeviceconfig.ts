import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VolumeSpecification } from "./volumespecification";


// EbsBlockDeviceConfig
/** 
 * Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.
**/
export class EbsBlockDeviceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=VolumeSpecification" })
  volumeSpecification: VolumeSpecification;

  @Metadata({ data: "json, name=VolumesPerInstance" })
  volumesPerInstance?: number;
}
