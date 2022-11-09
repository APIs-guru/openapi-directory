import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThingTypeMetadata } from "./thingtypemetadata";
import { ThingTypeProperties } from "./thingtypeproperties";


// ThingTypeDefinition
/** 
 * The definition of the thing type, including thing type name and description.
**/
export class ThingTypeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingTypeArn" })
  thingTypeArn?: string;

  @Metadata({ data: "json, name=thingTypeMetadata" })
  thingTypeMetadata?: ThingTypeMetadata;

  @Metadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;

  @Metadata({ data: "json, name=thingTypeProperties" })
  thingTypeProperties?: ThingTypeProperties;
}
