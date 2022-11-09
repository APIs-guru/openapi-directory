import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AugmentedManifestsListItem } from "./augmentedmanifestslistitem";
import { DocumentClassifierDataFormatEnum } from "./documentclassifierdataformatenum";
/**
 * <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
**/
export declare class DocumentClassifierInputDataConfig extends SpeakeasyBase {
    augmentedManifests?: AugmentedManifestsListItem[];
    dataFormat?: DocumentClassifierDataFormatEnum;
    labelDelimiter?: string;
    s3Uri?: string;
}
