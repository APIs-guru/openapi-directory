import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatadogConnectorProfileCredentials
/** 
 *  The connector-specific credentials required by Datadog. 
**/
export class DatadogConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=applicationKey" })
  applicationKey: string;
}
