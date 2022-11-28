import { SpeakeasyBase } from "../../../internal/utils";
import { CaptionSource } from "./captionsource";
/**
 * The captions to be created, if any.
**/
export declare class InputCaptions extends SpeakeasyBase {
    captionSources?: CaptionSource[];
    mergePolicy?: string;
}
