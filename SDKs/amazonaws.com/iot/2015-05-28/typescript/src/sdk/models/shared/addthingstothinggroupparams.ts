import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddThingsToThingGroupParams
/** 
 * Parameters used when defining a mitigation action that move a set of things to a thing group.
**/
export class AddThingsToThingGroupParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overrideDynamicGroups" })
  overrideDynamicGroups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=thingGroupNames" })
  thingGroupNames: string[];
}
