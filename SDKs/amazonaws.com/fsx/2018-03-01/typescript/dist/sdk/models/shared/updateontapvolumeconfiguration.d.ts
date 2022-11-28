import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";
/**
 * Used to specify changes to the ONTAP configuration for the volume you are updating.
**/
export declare class UpdateOntapVolumeConfiguration extends SpeakeasyBase {
    junctionPath?: string;
    securityStyle?: SecurityStyleEnum;
    sizeInMegabytes?: number;
    storageEfficiencyEnabled?: boolean;
    tieringPolicy?: TieringPolicy;
}
