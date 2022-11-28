import { SpeakeasyBase } from "../../../internal/utils";
import { ThingConnectivity } from "./thingconnectivity";
/**
 * The thing search index document.
**/
export declare class ThingDocument extends SpeakeasyBase {
    attributes?: Map<string, string>;
    connectivity?: ThingConnectivity;
    shadow?: string;
    thingGroupNames?: string[];
    thingId?: string;
    thingName?: string;
    thingTypeName?: string;
}
