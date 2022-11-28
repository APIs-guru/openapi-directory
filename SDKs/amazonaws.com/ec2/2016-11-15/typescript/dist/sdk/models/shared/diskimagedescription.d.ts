import { SpeakeasyBase } from "../../../internal/utils";
import { DiskImageFormatEnum } from "./diskimageformatenum";
/**
 * Describes a disk image.
**/
export declare class DiskImageDescription extends SpeakeasyBase {
    checksum?: string;
    format?: DiskImageFormatEnum;
    importManifestUrl?: string;
    size?: number;
}
