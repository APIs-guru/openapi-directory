import { SpeakeasyBase } from "../../../internal/utils";
import { CaptionFormat } from "./captionformat";
import { CaptionSource } from "./captionsource";
/**
 * The captions to be created, if any.
**/
export declare class Captions extends SpeakeasyBase {
    captionFormats?: CaptionFormat[];
    captionSources?: CaptionSource[];
    mergePolicy?: string;
}
