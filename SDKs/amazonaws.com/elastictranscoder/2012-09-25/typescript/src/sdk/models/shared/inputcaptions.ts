import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CaptionSource } from "./captionsource";


// InputCaptions
/** 
 * The captions to be created, if any.
**/
export class InputCaptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptionSources", elemType: shared.CaptionSource })
  captionSources?: CaptionSource[];

  @Metadata({ data: "json, name=MergePolicy" })
  mergePolicy?: string;
}
