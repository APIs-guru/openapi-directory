import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";
/**
 * Specifies the configuration of the ONTAP volume that you are creating.
**/
export declare class CreateOntapVolumeConfiguration extends SpeakeasyBase {
    junctionPath: string;
    securityStyle?: SecurityStyleEnum;
    sizeInMegabytes: number;
    storageEfficiencyEnabled: boolean;
    storageVirtualMachineId: string;
    tieringPolicy?: TieringPolicy;
}
