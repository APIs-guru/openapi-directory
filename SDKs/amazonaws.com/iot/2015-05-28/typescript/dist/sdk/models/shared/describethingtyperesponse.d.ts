import { SpeakeasyBase } from "../../../internal/utils";
import { ThingTypeMetadata } from "./thingtypemetadata";
import { ThingTypeProperties } from "./thingtypeproperties";
/**
 * The output for the DescribeThingType operation.
**/
export declare class DescribeThingTypeResponse extends SpeakeasyBase {
    thingTypeArn?: string;
    thingTypeId?: string;
    thingTypeMetadata?: ThingTypeMetadata;
    thingTypeName?: string;
    thingTypeProperties?: ThingTypeProperties;
}
