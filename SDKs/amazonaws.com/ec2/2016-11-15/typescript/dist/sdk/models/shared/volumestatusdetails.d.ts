import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeStatusNameEnum } from "./volumestatusnameenum";
/**
 * Describes a volume status.
**/
export declare class VolumeStatusDetails extends SpeakeasyBase {
    name?: VolumeStatusNameEnum;
    status?: string;
}
