import { SpeakeasyBase } from "../../../internal/utils";
import { FlexCacheEndpointTypeEnum } from "./flexcacheendpointtypeenum";
import { OntapVolumeTypeEnum } from "./ontapvolumetypeenum";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";
/**
 * The configuration of an Amazon FSx for NetApp ONTAP volume
**/
export declare class OntapVolumeConfiguration extends SpeakeasyBase {
    flexCacheEndpointType?: FlexCacheEndpointTypeEnum;
    junctionPath?: string;
    ontapVolumeType?: OntapVolumeTypeEnum;
    securityStyle?: SecurityStyleEnum;
    sizeInMegabytes?: number;
    storageEfficiencyEnabled?: boolean;
    storageVirtualMachineId?: string;
    storageVirtualMachineRoot?: boolean;
    tieringPolicy?: TieringPolicy;
    uuid?: string;
}
