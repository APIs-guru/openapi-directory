import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThingTypeMetadata } from "./thingtypemetadata";
import { ThingTypeProperties } from "./thingtypeproperties";



// ThingTypeDefinition
/** 
 * The definition of the thing type, including thing type name and description.
**/
export class ThingTypeDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingTypeArn" })
  thingTypeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeMetadata" })
  thingTypeMetadata?: ThingTypeMetadata;

  @SpeakeasyMetadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeProperties" })
  thingTypeProperties?: ThingTypeProperties;
}
