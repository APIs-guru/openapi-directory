import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeFilterNameEnum } from "./volumefilternameenum";
/**
 * A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP volumes. You can use multiple filters to return results that meet all applied filter requirements.
**/
export declare class VolumeFilter extends SpeakeasyBase {
    name?: VolumeFilterNameEnum;
    values?: string[];
}
