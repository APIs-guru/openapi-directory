import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityRecognizerDocuments
/** 
 * Describes the training documents submitted with an entity recognizer.
**/
export class EntityRecognizerDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
