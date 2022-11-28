import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artwork } from "./artwork";



// JobAlbumArt
/** 
 * The .jpg or .png file associated with an audio file.
**/
export class JobAlbumArt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Artwork", elemType: Artwork })
  artwork?: Artwork[];

  @SpeakeasyMetadata({ data: "json, name=MergePolicy" })
  mergePolicy?: string;
}
