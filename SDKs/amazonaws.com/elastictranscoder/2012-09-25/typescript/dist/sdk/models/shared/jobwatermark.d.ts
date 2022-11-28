import { SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";
/**
 * Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
**/
export declare class JobWatermark extends SpeakeasyBase {
    encryption?: Encryption;
    inputKey?: string;
    presetWatermarkId?: string;
}
