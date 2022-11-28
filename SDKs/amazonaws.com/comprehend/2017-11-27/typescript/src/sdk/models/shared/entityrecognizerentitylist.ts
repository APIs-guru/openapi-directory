import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityRecognizerEntityList
/** 
 * Describes the entity recognizer submitted with an entity recognizer.
**/
export class EntityRecognizerEntityList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
