import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PresetWatermark } from "./presetwatermark";



// VideoParameters
/** 
 * The <code>VideoParameters</code> structure.
**/
export class VideoParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=BitRate" })
  bitRate?: string;

  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecOptions" })
  codecOptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=DisplayAspectRatio" })
  displayAspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=FixedGOP" })
  fixedGop?: string;

  @SpeakeasyMetadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyframesMaxDist" })
  keyframesMaxDist?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxFrameRate" })
  maxFrameRate?: string;

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

  @SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: PresetWatermark })
  watermarks?: PresetWatermark[];
}
