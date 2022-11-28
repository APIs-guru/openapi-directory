import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VeevaConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Veeva. 
**/
export class VeevaConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
