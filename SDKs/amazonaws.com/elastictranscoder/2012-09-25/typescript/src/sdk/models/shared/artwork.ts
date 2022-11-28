import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";



// Artwork
/** 
 * <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>
**/
export class Artwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlbumArtFormat" })
  albumArtFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=InputKey" })
  inputKey?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxHeight" })
  maxHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxWidth" })
  maxWidth?: string;

  @SpeakeasyMetadata({ data: "json, name=PaddingPolicy" })
  paddingPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=SizingPolicy" })
  sizingPolicy?: string;
}
