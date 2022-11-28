import { SpeakeasyBase } from "../../../internal/utils";
import { ParquetCompressionEnum } from "./parquetcompressionenum";
import { ParquetWriterVersionEnum } from "./parquetwriterversionenum";
/**
 * A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.
**/
export declare class ParquetSerDe extends SpeakeasyBase {
    blockSizeBytes?: number;
    compression?: ParquetCompressionEnum;
    enableDictionaryCompression?: boolean;
    maxPaddingBytes?: number;
    pageSizeBytes?: number;
    writerVersion?: ParquetWriterVersionEnum;
}
