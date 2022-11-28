import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnowflakeConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Snowflake. 
**/
export class SnowflakeConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=privateLinkServiceName" })
  privateLinkServiceName?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage: string;

  @SpeakeasyMetadata({ data: "json, name=warehouse" })
  warehouse: string;
}
