import { SpeakeasyBase } from "../../../internal/utils";
import { PresetWatermark } from "./presetwatermark";
/**
 * The <code>VideoParameters</code> structure.
**/
export declare class VideoParameters extends SpeakeasyBase {
    aspectRatio?: string;
    bitRate?: string;
    codec?: string;
    codecOptions?: Map<string, string>;
    displayAspectRatio?: string;
    fixedGop?: string;
    frameRate?: string;
    keyframesMaxDist?: string;
    maxFrameRate?: string;
    maxHeight?: string;
    maxWidth?: string;
    paddingPolicy?: string;
    resolution?: string;
    sizingPolicy?: string;
    watermarks?: PresetWatermark[];
}
