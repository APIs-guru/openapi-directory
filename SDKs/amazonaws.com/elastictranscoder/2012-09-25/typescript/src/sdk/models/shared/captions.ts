import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaptionFormat } from "./captionformat";
import { CaptionSource } from "./captionsource";



// Captions
/** 
 * The captions to be created, if any.
**/
export class Captions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptionFormats", elemType: CaptionFormat })
  captionFormats?: CaptionFormat[];

  @SpeakeasyMetadata({ data: "json, name=CaptionSources", elemType: CaptionSource })
  captionSources?: CaptionSource[];

  @SpeakeasyMetadata({ data: "json, name=MergePolicy" })
  mergePolicy?: string;
}
