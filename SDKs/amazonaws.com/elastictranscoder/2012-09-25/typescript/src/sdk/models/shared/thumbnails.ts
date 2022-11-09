import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Thumbnails
/** 
 * Thumbnails for videos.
**/
export class Thumbnails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=Interval" })
  interval?: string;

  @Metadata({ data: "json, name=MaxHeight" })
  maxHeight?: string;

  @Metadata({ data: "json, name=MaxWidth" })
  maxWidth?: string;

  @Metadata({ data: "json, name=PaddingPolicy" })
  paddingPolicy?: string;

  @Metadata({ data: "json, name=Resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=SizingPolicy" })
  sizingPolicy?: string;
}
