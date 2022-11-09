import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Artwork } from "./artwork";


// JobAlbumArt
/** 
 * The .jpg or .png file associated with an audio file.
**/
export class JobAlbumArt extends SpeakeasyBase {
  @Metadata({ data: "json, name=Artwork", elemType: shared.Artwork })
  artwork?: Artwork[];

  @Metadata({ data: "json, name=MergePolicy" })
  mergePolicy?: string;
}
