import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatadogConnectorProfileCredentials
/** 
 *  The connector-specific credentials required by Datadog. 
**/
export class DatadogConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey: string;

  @Metadata({ data: "json, name=applicationKey" })
  applicationKey: string;
}
