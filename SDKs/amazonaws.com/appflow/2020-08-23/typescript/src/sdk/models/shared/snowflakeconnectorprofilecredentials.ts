import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnowflakeConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Snowflake. 
**/
export class SnowflakeConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
