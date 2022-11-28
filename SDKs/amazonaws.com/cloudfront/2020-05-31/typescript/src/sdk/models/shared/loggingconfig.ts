import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoggingConfig
/** 
 * A complex type that controls whether access logs are written for the distribution.
**/
export class LoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucket: string;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  includeCookies: boolean;

  @SpeakeasyMetadata()
  prefix: string;
}
