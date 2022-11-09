import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnowflakeConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Snowflake. 
**/
export class SnowflakeConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}
