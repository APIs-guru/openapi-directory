import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MarketoConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Marketo. 
**/
export class MarketoConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
