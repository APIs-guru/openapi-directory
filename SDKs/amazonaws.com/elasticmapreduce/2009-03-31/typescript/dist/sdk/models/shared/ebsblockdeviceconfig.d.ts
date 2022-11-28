import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeSpecification } from "./volumespecification";
/**
 * Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.
**/
export declare class EbsBlockDeviceConfig extends SpeakeasyBase {
    volumeSpecification: VolumeSpecification;
    volumesPerInstance?: number;
}
