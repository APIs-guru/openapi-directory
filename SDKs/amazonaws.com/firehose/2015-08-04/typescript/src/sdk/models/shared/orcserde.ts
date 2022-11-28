import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrcCompressionEnum } from "./orccompressionenum";
import { OrcFormatVersionEnum } from "./orcformatversionenum";



// OrcSerDe
/** 
 * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.
**/
export class OrcSerDe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockSizeBytes" })
  blockSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=BloomFilterColumns" })
  bloomFilterColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=BloomFilterFalsePositiveProbability" })
  bloomFilterFalsePositiveProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=Compression" })
  compression?: OrcCompressionEnum;

  @SpeakeasyMetadata({ data: "json, name=DictionaryKeyThreshold" })
  dictionaryKeyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=EnablePadding" })
  enablePadding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FormatVersion" })
  formatVersion?: OrcFormatVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=PaddingTolerance" })
  paddingTolerance?: number;

  @SpeakeasyMetadata({ data: "json, name=RowIndexStride" })
  rowIndexStride?: number;

  @SpeakeasyMetadata({ data: "json, name=StripeSizeBytes" })
  stripeSizeBytes?: number;
}
