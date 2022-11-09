import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InforNexusConnectorProfileProperties
/** 
 *  The connector-specific profile properties required by Infor Nexus. 
**/
export class InforNexusConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
