import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedProperties } from "./detectedproperties";
import { Encryption } from "./encryption";
import { InputCaptions } from "./inputcaptions";
import { TimeSpan } from "./timespan";
/**
 * Information about the file that you're transcoding.
**/
export declare class JobInput extends SpeakeasyBase {
    aspectRatio?: string;
    container?: string;
    detectedProperties?: DetectedProperties;
    encryption?: Encryption;
    frameRate?: string;
    inputCaptions?: InputCaptions;
    interlaced?: string;
    key?: string;
    resolution?: string;
    timeSpan?: TimeSpan;
}
