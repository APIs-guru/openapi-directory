import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityTypesListItem
/** 
 * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
**/
export class EntityTypesListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}
