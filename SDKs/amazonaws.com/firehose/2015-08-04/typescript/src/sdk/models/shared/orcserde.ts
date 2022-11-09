import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrcCompressionEnum } from "./orccompressionenum";
import { OrcFormatVersionEnum } from "./orcformatversionenum";


// OrcSerDe
/** 
 * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.
**/
export class OrcSerDe extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockSizeBytes" })
  blockSizeBytes?: number;

  @Metadata({ data: "json, name=BloomFilterColumns" })
  bloomFilterColumns?: string[];

  @Metadata({ data: "json, name=BloomFilterFalsePositiveProbability" })
  bloomFilterFalsePositiveProbability?: number;

  @Metadata({ data: "json, name=Compression" })
  compression?: OrcCompressionEnum;

  @Metadata({ data: "json, name=DictionaryKeyThreshold" })
  dictionaryKeyThreshold?: number;

  @Metadata({ data: "json, name=EnablePadding" })
  enablePadding?: boolean;

  @Metadata({ data: "json, name=FormatVersion" })
  formatVersion?: OrcFormatVersionEnum;

  @Metadata({ data: "json, name=PaddingTolerance" })
  paddingTolerance?: number;

  @Metadata({ data: "json, name=RowIndexStride" })
  rowIndexStride?: number;

  @Metadata({ data: "json, name=StripeSizeBytes" })
  stripeSizeBytes?: number;
}
