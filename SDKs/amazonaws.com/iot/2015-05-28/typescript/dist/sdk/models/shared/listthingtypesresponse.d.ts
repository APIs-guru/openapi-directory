import { SpeakeasyBase } from "../../../internal/utils";
import { ThingTypeDefinition } from "./thingtypedefinition";
/**
 * The output for the ListThingTypes operation.
**/
export declare class ListThingTypesResponse extends SpeakeasyBase {
    nextToken?: string;
    thingTypes?: ThingTypeDefinition[];
}
