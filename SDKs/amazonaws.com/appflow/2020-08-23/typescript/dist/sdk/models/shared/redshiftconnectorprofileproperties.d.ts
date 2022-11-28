import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The connector-specific profile properties when using Amazon Redshift.
**/
export declare class RedshiftConnectorProfileProperties extends SpeakeasyBase {
    bucketName: string;
    bucketPrefix?: string;
    databaseUrl: string;
    roleArn: string;
}
