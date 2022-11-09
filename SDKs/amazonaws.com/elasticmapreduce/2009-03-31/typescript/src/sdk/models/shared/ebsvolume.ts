import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EbsVolume
/** 
 * EBS block device that's attached to an EC2 instance.
**/
export class EbsVolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=Device" })
  device?: string;

  @Metadata({ data: "json, name=VolumeId" })
  volumeId?: string;
}
