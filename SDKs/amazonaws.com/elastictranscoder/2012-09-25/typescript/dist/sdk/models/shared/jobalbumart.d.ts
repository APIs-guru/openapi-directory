import { SpeakeasyBase } from "../../../internal/utils";
import { Artwork } from "./artwork";
/**
 * The .jpg or .png file associated with an audio file.
**/
export declare class JobAlbumArt extends SpeakeasyBase {
    artwork?: Artwork[];
    mergePolicy?: string;
}
