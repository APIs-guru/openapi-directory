import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaptionSource } from "./captionsource";



// InputCaptions
/** 
 * The captions to be created, if any.
**/
export class InputCaptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptionSources", elemType: CaptionSource })
  captionSources?: CaptionSource[];

  @SpeakeasyMetadata({ data: "json, name=MergePolicy" })
  mergePolicy?: string;
}
