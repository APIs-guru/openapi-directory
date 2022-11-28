import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThingGroupDocument
/** 
 * The thing group search index document.
**/
export class ThingGroupDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parentGroupNames" })
  parentGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;
}
