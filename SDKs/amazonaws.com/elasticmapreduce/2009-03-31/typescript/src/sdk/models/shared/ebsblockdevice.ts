import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VolumeSpecification } from "./volumespecification";


// EbsBlockDevice
/** 
 * Configuration of requested EBS block device associated with the instance group.
**/
export class EbsBlockDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=Device" })
  device?: string;

  @Metadata({ data: "json, name=VolumeSpecification" })
  volumeSpecification?: VolumeSpecification;
}
