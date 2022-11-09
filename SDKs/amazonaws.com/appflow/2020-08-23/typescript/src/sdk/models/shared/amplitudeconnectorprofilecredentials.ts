import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AmplitudeConnectorProfileCredentials
/** 
 *  The connector-specific credentials required when using Amplitude. 
**/
export class AmplitudeConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey: string;

  @Metadata({ data: "json, name=secretKey" })
  secretKey: string;
}
