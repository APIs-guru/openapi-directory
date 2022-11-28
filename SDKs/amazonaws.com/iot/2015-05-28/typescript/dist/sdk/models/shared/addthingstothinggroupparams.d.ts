import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters used when defining a mitigation action that move a set of things to a thing group.
**/
export declare class AddThingsToThingGroupParams extends SpeakeasyBase {
    overrideDynamicGroups?: boolean;
    thingGroupNames: string[];
}
