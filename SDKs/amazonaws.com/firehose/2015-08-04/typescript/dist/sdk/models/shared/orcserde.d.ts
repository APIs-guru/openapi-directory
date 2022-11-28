import { SpeakeasyBase } from "../../../internal/utils";
import { OrcCompressionEnum } from "./orccompressionenum";
import { OrcFormatVersionEnum } from "./orcformatversionenum";
/**
 * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.
**/
export declare class OrcSerDe extends SpeakeasyBase {
    blockSizeBytes?: number;
    bloomFilterColumns?: string[];
    bloomFilterFalsePositiveProbability?: number;
    compression?: OrcCompressionEnum;
    dictionaryKeyThreshold?: number;
    enablePadding?: boolean;
    formatVersion?: OrcFormatVersionEnum;
    paddingTolerance?: number;
    rowIndexStride?: number;
    stripeSizeBytes?: number;
}
