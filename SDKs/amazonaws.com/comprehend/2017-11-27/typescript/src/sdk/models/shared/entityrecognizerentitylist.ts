import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityRecognizerEntityList
/** 
 * Describes the entity recognizer submitted with an entity recognizer.
**/
export class EntityRecognizerEntityList extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
