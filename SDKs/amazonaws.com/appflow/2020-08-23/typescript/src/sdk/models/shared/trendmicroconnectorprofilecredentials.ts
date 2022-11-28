import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrendmicroConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Trend Micro. 
**/
export class TrendmicroConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiSecretKey" })
  apiSecretKey: string;
}
