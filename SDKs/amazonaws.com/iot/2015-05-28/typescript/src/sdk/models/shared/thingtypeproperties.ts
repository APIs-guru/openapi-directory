import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThingTypeProperties
/** 
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
**/
export class ThingTypeProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=searchableAttributes" })
  searchableAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=thingTypeDescription" })
  thingTypeDescription?: string;
}
