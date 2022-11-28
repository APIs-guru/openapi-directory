import { SpeakeasyBase } from "../../../internal/utils";
import { AugmentedManifestsDocumentTypeFormatEnum } from "./augmentedmanifestsdocumenttypeformatenum";
/**
 * An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
**/
export declare class AugmentedManifestsListItem extends SpeakeasyBase {
    annotationDataS3Uri?: string;
    attributeNames: string[];
    documentType?: AugmentedManifestsDocumentTypeFormatEnum;
    s3Uri: string;
    sourceDocumentsS3Uri?: string;
}
