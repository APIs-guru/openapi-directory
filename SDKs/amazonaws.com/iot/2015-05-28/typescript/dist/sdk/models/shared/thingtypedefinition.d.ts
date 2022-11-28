import { SpeakeasyBase } from "../../../internal/utils";
import { ThingTypeMetadata } from "./thingtypemetadata";
import { ThingTypeProperties } from "./thingtypeproperties";
/**
 * The definition of the thing type, including thing type name and description.
**/
export declare class ThingTypeDefinition extends SpeakeasyBase {
    thingTypeArn?: string;
    thingTypeMetadata?: ThingTypeMetadata;
    thingTypeName?: string;
    thingTypeProperties?: ThingTypeProperties;
}
