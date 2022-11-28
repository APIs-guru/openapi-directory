import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AmplitudeConnectorProfileCredentials
/** 
 *  The connector-specific credentials required when using Amplitude. 
**/
export class AmplitudeConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=secretKey" })
  secretKey: string;
}
