import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThingTypeProperties
/** 
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
**/
export class ThingTypeProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=searchableAttributes" })
  searchableAttributes?: string[];

  @Metadata({ data: "json, name=thingTypeDescription" })
  thingTypeDescription?: string;
}
