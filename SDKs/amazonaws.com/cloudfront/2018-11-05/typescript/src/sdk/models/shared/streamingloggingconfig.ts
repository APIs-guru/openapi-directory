import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StreamingLoggingConfig
/** 
 * A complex type that controls whether access logs are written for this streaming distribution.
**/
export class StreamingLoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucket: string;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  prefix: string;
}
