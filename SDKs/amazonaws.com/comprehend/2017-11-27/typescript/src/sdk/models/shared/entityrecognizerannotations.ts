import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityRecognizerAnnotations
/** 
 * Describes the annotations associated with a entity recognizer.
**/
export class EntityRecognizerAnnotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
