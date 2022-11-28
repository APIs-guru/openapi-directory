import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeStatusDetails } from "./volumestatusdetails";
import { VolumeStatusInfoStatusEnum } from "./volumestatusinfostatusenum";
/**
 * Describes the status of a volume.
**/
export declare class VolumeStatusInfo extends SpeakeasyBase {
    details?: VolumeStatusDetails[];
    status?: VolumeStatusInfoStatusEnum;
}
