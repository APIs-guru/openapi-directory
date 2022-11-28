import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The container path, mount options, and size of the tmpfs mount.
**/
export declare class Tmpfs extends SpeakeasyBase {
    containerPath: string;
    mountOptions?: string[];
    size: number;
}
