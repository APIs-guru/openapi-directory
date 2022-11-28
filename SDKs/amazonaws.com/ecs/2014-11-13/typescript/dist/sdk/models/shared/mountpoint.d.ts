import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details on a volume mount point that is used in a container definition.
**/
export declare class MountPoint extends SpeakeasyBase {
    containerPath?: string;
    readOnly?: boolean;
    sourceVolume?: string;
}
