import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParquetCompressionEnum } from "./parquetcompressionenum";
import { ParquetWriterVersionEnum } from "./parquetwriterversionenum";


// ParquetSerDe
/** 
 * A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.
**/
export class ParquetSerDe extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockSizeBytes" })
  blockSizeBytes?: number;

  @Metadata({ data: "json, name=Compression" })
  compression?: ParquetCompressionEnum;

  @Metadata({ data: "json, name=EnableDictionaryCompression" })
  enableDictionaryCompression?: boolean;

  @Metadata({ data: "json, name=MaxPaddingBytes" })
  maxPaddingBytes?: number;

  @Metadata({ data: "json, name=PageSizeBytes" })
  pageSizeBytes?: number;

  @Metadata({ data: "json, name=WriterVersion" })
  writerVersion?: ParquetWriterVersionEnum;
}
