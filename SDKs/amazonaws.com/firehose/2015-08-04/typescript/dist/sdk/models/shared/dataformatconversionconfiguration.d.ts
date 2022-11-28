import { SpeakeasyBase } from "../../../internal/utils";
import { InputFormatConfiguration } from "./inputformatconfiguration";
import { OutputFormatConfiguration } from "./outputformatconfiguration";
import { SchemaConfiguration } from "./schemaconfiguration";
/**
 * Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.
**/
export declare class DataFormatConversionConfiguration extends SpeakeasyBase {
    enabled?: boolean;
    inputFormatConfiguration?: InputFormatConfiguration;
    outputFormatConfiguration?: OutputFormatConfiguration;
    schemaConfiguration?: SchemaConfiguration;
}
