import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceAvailabilityEnum } from "./deviceavailabilityenum";
import { Cpu } from "./cpu";
import { DeviceFormFactorEnum } from "./deviceformfactorenum";
import { DeviceInstance } from "./deviceinstance";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { Resolution } from "./resolution";
/**
 * Represents a device type that an app is tested against.
**/
export declare class Device extends SpeakeasyBase {
    arn?: string;
    availability?: DeviceAvailabilityEnum;
    carrier?: string;
    cpu?: Cpu;
    fleetName?: string;
    fleetType?: string;
    formFactor?: DeviceFormFactorEnum;
    heapSize?: number;
    image?: string;
    instances?: DeviceInstance[];
    manufacturer?: string;
    memory?: number;
    model?: string;
    modelId?: string;
    name?: string;
    os?: string;
    platform?: DevicePlatformEnum;
    radio?: string;
    remoteAccessEnabled?: boolean;
    remoteDebugEnabled?: boolean;
    resolution?: Resolution;
}
