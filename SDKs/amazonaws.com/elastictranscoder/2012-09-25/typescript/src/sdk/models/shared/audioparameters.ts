import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AudioCodecOptions } from "./audiocodecoptions";


// AudioParameters
/** 
 * Parameters required for transcoding audio.
**/
export class AudioParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioPackingMode" })
  audioPackingMode?: string;

  @Metadata({ data: "json, name=BitRate" })
  bitRate?: string;

  @Metadata({ data: "json, name=Channels" })
  channels?: string;

  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=CodecOptions" })
  codecOptions?: AudioCodecOptions;

  @Metadata({ data: "json, name=SampleRate" })
  sampleRate?: string;
}
