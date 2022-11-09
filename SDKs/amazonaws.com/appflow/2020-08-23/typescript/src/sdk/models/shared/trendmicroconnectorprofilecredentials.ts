import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrendmicroConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Trend Micro. 
**/
export class TrendmicroConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiSecretKey" })
  apiSecretKey: string;
}
