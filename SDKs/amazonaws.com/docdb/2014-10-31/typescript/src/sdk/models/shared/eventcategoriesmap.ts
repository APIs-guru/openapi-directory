import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventCategoriesMap
/** 
 * An event source type, accompanied by one or more event category names.
**/
export class EventCategoriesMap extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
