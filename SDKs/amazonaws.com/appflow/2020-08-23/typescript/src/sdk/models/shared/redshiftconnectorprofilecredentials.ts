import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RedshiftConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Amazon Redshift. 
**/
export class RedshiftConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}
