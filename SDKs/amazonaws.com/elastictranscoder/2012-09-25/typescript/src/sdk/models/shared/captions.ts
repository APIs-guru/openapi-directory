import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CaptionFormat } from "./captionformat";
import { CaptionSource } from "./captionsource";


// Captions
/** 
 * The captions to be created, if any.
**/
export class Captions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptionFormats", elemType: shared.CaptionFormat })
  captionFormats?: CaptionFormat[];

  @Metadata({ data: "json, name=CaptionSources", elemType: shared.CaptionSource })
  captionSources?: CaptionSource[];

  @Metadata({ data: "json, name=MergePolicy" })
  mergePolicy?: string;
}
