import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnowflakeConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Snowflake. 
**/
export class SnowflakeConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @Metadata({ data: "json, name=privateLinkServiceName" })
  privateLinkServiceName?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=stage" })
  stage: string;

  @Metadata({ data: "json, name=warehouse" })
  warehouse: string;
}
