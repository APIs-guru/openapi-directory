import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The thing group search index document.
**/
export declare class ThingGroupDocument extends SpeakeasyBase {
    attributes?: Map<string, string>;
    parentGroupNames?: string[];
    thingGroupDescription?: string;
    thingGroupId?: string;
    thingGroupName?: string;
}
