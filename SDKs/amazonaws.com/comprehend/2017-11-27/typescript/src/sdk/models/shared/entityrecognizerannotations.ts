import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityRecognizerAnnotations
/** 
 * Describes the annotations associated with a entity recognizer.
**/
export class EntityRecognizerAnnotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
