import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InforNexusConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required by Infor Nexus. 
**/
export class InforNexusConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId: string;

  @SpeakeasyMetadata({ data: "json, name=datakey" })
  datakey: string;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}
