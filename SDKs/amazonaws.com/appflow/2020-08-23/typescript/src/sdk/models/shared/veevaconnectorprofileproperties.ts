import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VeevaConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Veeva. 
**/
export class VeevaConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
