import { SpeakeasyBase } from "../../../internal/utils";
import { Serializer } from "./serializer";
/**
 * Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
**/
export declare class OutputFormatConfiguration extends SpeakeasyBase {
    serializer?: Serializer;
}
