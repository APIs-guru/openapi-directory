import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeSpecification } from "./volumespecification";
/**
 * Configuration of requested EBS block device associated with the instance group.
**/
export declare class EbsBlockDevice extends SpeakeasyBase {
    device?: string;
    volumeSpecification?: VolumeSpecification;
}
