import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureValuesEnum } from "./architecturevaluesenum";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { BootModeValuesEnum } from "./bootmodevaluesenum";
import { HypervisorTypeEnum } from "./hypervisortypeenum";
import { ImageTypeValuesEnum } from "./imagetypevaluesenum";
import { PlatformValuesEnum } from "./platformvaluesenum";
import { ProductCode } from "./productcode";
import { DeviceTypeEnum } from "./devicetypeenum";
import { ImageStateEnum } from "./imagestateenum";
import { StateReason } from "./statereason";
import { Tag } from "./tag";
import { VirtualizationTypeEnum } from "./virtualizationtypeenum";
/**
 * Describes an image.
**/
export declare class Image extends SpeakeasyBase {
    architecture?: ArchitectureValuesEnum;
    blockDeviceMappings?: BlockDeviceMapping[];
    bootMode?: BootModeValuesEnum;
    creationDate?: string;
    deprecationTime?: string;
    description?: string;
    enaSupport?: boolean;
    hypervisor?: HypervisorTypeEnum;
    imageId?: string;
    imageLocation?: string;
    imageOwnerAlias?: string;
    imageType?: ImageTypeValuesEnum;
    kernelId?: string;
    name?: string;
    ownerId?: string;
    platform?: PlatformValuesEnum;
    platformDetails?: string;
    productCodes?: ProductCode[];
    public?: boolean;
    ramdiskId?: string;
    rootDeviceName?: string;
    rootDeviceType?: DeviceTypeEnum;
    sriovNetSupport?: string;
    state?: ImageStateEnum;
    stateReason?: StateReason;
    tags?: Tag[];
    usageOperation?: string;
    virtualizationType?: VirtualizationTypeEnum;
}
