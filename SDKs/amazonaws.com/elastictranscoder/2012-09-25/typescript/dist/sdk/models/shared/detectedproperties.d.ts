import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The detected properties of the input file. Elastic Transcoder identifies these values from the input file.
**/
export declare class DetectedProperties extends SpeakeasyBase {
    durationMillis?: number;
    fileSize?: number;
    frameRate?: string;
    height?: number;
    width?: number;
}
