import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InforNexusConnectorProfileProperties
/** 
 *  The connector-specific profile properties required by Infor Nexus. 
**/
export class InforNexusConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
