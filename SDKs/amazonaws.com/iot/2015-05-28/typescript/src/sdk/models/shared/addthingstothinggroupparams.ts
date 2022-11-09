import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddThingsToThingGroupParams
/** 
 * Parameters used when defining a mitigation action that move a set of things to a thing group.
**/
export class AddThingsToThingGroupParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=overrideDynamicGroups" })
  overrideDynamicGroups?: boolean;

  @Metadata({ data: "json, name=thingGroupNames" })
  thingGroupNames: string[];
}
