import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PresetWatermark } from "./presetwatermark";


// VideoParameters
/** 
 * The <code>VideoParameters</code> structure.
**/
export class VideoParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=BitRate" })
  bitRate?: string;

  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=CodecOptions" })
  codecOptions?: Map<string, string>;

  @Metadata({ data: "json, name=DisplayAspectRatio" })
  displayAspectRatio?: string;

  @Metadata({ data: "json, name=FixedGOP" })
  fixedGop?: string;

  @Metadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @Metadata({ data: "json, name=KeyframesMaxDist" })
  keyframesMaxDist?: string;

  @Metadata({ data: "json, name=MaxFrameRate" })
  maxFrameRate?: string;

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

  @Metadata({ data: "json, name=Watermarks", elemType: shared.PresetWatermark })
  watermarks?: PresetWatermark[];
}
