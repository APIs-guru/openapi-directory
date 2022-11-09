import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AudioCodecOptions
/** 
 * Options associated with your audio codec.
**/
export class AudioCodecOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=BitDepth" })
  bitDepth?: string;

  @Metadata({ data: "json, name=BitOrder" })
  bitOrder?: string;

  @Metadata({ data: "json, name=Profile" })
  profile?: string;

  @Metadata({ data: "json, name=Signed" })
  signed?: string;
}
