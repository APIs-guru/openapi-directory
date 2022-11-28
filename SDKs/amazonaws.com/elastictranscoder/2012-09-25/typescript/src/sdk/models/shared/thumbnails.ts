import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Thumbnails
/** 
 * Thumbnails for videos.
**/
export class Thumbnails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxHeight" })
  maxHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxWidth" })
  maxWidth?: string;

  @SpeakeasyMetadata({ data: "json, name=PaddingPolicy" })
  paddingPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=Resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=SizingPolicy" })
  sizingPolicy?: string;
}
