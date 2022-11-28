import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The properties of the thing, including thing name, thing type name, and a list of thing attributes.
**/
export declare class ThingAttribute extends SpeakeasyBase {
    attributes?: Map<string, string>;
    thingArn?: string;
    thingName?: string;
    thingTypeName?: string;
    version?: number;
}
