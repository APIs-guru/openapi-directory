import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MarketoConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Marketo. 
**/
export class MarketoConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
