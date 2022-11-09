import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Encryption } from "./encryption";


// Artwork
/** 
 * <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>
**/
export class Artwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlbumArtFormat" })
  albumArtFormat?: string;

  @Metadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=InputKey" })
  inputKey?: string;

  @Metadata({ data: "json, name=MaxHeight" })
  maxHeight?: string;

  @Metadata({ data: "json, name=MaxWidth" })
  maxWidth?: string;

  @Metadata({ data: "json, name=PaddingPolicy" })
  paddingPolicy?: string;

  @Metadata({ data: "json, name=SizingPolicy" })
  sizingPolicy?: string;
}
