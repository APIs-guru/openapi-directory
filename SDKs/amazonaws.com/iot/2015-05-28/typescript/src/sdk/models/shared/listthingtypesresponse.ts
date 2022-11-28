import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThingTypeDefinition } from "./thingtypedefinition";



// ListThingTypesResponse
/** 
 * The output for the ListThingTypes operation.
**/
export class ListThingTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypes", elemType: ThingTypeDefinition })
  thingTypes?: ThingTypeDefinition[];
}
