import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudioCodecOptions
/** 
 * Options associated with your audio codec.
**/
export class AudioCodecOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BitDepth" })
  bitDepth?: string;

  @SpeakeasyMetadata({ data: "json, name=BitOrder" })
  bitOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=Profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=Signed" })
  signed?: string;
}
