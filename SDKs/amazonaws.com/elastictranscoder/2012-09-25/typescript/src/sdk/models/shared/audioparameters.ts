import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioCodecOptions } from "./audiocodecoptions";



// AudioParameters
/** 
 * Parameters required for transcoding audio.
**/
export class AudioParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioPackingMode" })
  audioPackingMode?: string;

  @SpeakeasyMetadata({ data: "json, name=BitRate" })
  bitRate?: string;

  @SpeakeasyMetadata({ data: "json, name=Channels" })
  channels?: string;

  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecOptions" })
  codecOptions?: AudioCodecOptions;

  @SpeakeasyMetadata({ data: "json, name=SampleRate" })
  sampleRate?: string;
}
