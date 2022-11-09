import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AugmentedManifestsDocumentTypeFormatEnum } from "./augmentedmanifestsdocumenttypeformatenum";


// AugmentedManifestsListItem
/** 
 * An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
**/
export class AugmentedManifestsListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnnotationDataS3Uri" })
  annotationDataS3Uri?: string;

  @Metadata({ data: "json, name=AttributeNames" })
  attributeNames: string[];

  @Metadata({ data: "json, name=DocumentType" })
  documentType?: AugmentedManifestsDocumentTypeFormatEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;

  @Metadata({ data: "json, name=SourceDocumentsS3Uri" })
  sourceDocumentsS3Uri?: string;
}
