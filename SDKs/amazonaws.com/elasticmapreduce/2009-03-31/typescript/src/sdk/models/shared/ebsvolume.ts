import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EbsVolume
/** 
 * EBS block device that's attached to an EC2 instance.
**/
export class EbsVolume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId?: string;
}
