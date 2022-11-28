import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { Tmpfs } from "./tmpfs";
/**
 * Linux-specific modifications that are applied to the container, such as details for device mappings.
**/
export declare class LinuxParameters extends SpeakeasyBase {
    devices?: Device[];
    initProcessEnabled?: boolean;
    maxSwap?: number;
    sharedMemorySize?: number;
    swappiness?: number;
    tmpfs?: Tmpfs[];
}
