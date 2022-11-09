import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityTypesListItem
/** 
 * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
**/
export class EntityTypesListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type: string;
}
