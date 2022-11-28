import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformDeviceTypeEnum } from "./platformdevicetypeenum";
/**
 * The devices that are available on the container instance. The only supported device type is a GPU.
**/
export declare class PlatformDevice extends SpeakeasyBase {
    id: string;
    type: PlatformDeviceTypeEnum;
}
