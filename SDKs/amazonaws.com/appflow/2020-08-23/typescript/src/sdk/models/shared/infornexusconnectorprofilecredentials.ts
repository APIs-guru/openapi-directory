import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InforNexusConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required by Infor Nexus. 
**/
export class InforNexusConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKeyId" })
  accessKeyId: string;

  @Metadata({ data: "json, name=datakey" })
  datakey: string;

  @Metadata({ data: "json, name=secretAccessKey" })
  secretAccessKey: string;

  @Metadata({ data: "json, name=userId" })
  userId: string;
}
