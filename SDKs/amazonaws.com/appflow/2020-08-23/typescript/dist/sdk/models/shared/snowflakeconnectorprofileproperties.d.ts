import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The connector-specific profile properties required when using Snowflake.
**/
export declare class SnowflakeConnectorProfileProperties extends SpeakeasyBase {
    accountName?: string;
    bucketName: string;
    bucketPrefix?: string;
    privateLinkServiceName?: string;
    region?: string;
    stage: string;
    warehouse: string;
}
