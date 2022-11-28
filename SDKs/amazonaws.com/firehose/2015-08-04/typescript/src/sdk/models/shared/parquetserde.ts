import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParquetCompressionEnum } from "./parquetcompressionenum";
import { ParquetWriterVersionEnum } from "./parquetwriterversionenum";



// ParquetSerDe
/** 
 * A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.
**/
export class ParquetSerDe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockSizeBytes" })
  blockSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=Compression" })
  compression?: ParquetCompressionEnum;

  @SpeakeasyMetadata({ data: "json, name=EnableDictionaryCompression" })
  enableDictionaryCompression?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxPaddingBytes" })
  maxPaddingBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=PageSizeBytes" })
  pageSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=WriterVersion" })
  writerVersion?: ParquetWriterVersionEnum;
}
