import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RedshiftConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Amazon Redshift. 
**/
export class RedshiftConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
