import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThingTypeDefinition } from "./thingtypedefinition";


// ListThingTypesResponse
/** 
 * The output for the ListThingTypes operation.
**/
export class ListThingTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=thingTypes", elemType: shared.ThingTypeDefinition })
  thingTypes?: ThingTypeDefinition[];
}
