import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
**/
export declare class SchemaConfiguration extends SpeakeasyBase {
    catalogId?: string;
    databaseName?: string;
    region?: string;
    roleArn?: string;
    tableName?: string;
    versionId?: string;
}
