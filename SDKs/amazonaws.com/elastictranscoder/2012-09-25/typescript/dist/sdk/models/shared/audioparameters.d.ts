import { SpeakeasyBase } from "../../../internal/utils";
import { AudioCodecOptions } from "./audiocodecoptions";
/**
 * Parameters required for transcoding audio.
**/
export declare class AudioParameters extends SpeakeasyBase {
    audioPackingMode?: string;
    bitRate?: string;
    channels?: string;
    codec?: string;
    codecOptions?: AudioCodecOptions;
    sampleRate?: string;
}
