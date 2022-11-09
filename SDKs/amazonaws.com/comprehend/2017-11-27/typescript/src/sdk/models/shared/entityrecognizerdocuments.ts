import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityRecognizerDocuments
/** 
 * Describes the training documents submitted with an entity recognizer.
**/
export class EntityRecognizerDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
