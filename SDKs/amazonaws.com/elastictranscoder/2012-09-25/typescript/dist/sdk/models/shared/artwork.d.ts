import { SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";
/**
 * <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>
**/
export declare class Artwork extends SpeakeasyBase {
    albumArtFormat?: string;
    encryption?: Encryption;
    inputKey?: string;
    maxHeight?: string;
    maxWidth?: string;
    paddingPolicy?: string;
    sizingPolicy?: string;
}
