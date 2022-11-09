import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThingGroupDocument
/** 
 * The thing group search index document.
**/
export class ThingGroupDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=parentGroupNames" })
  parentGroupNames?: string[];

  @Metadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;

  @Metadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;

  @Metadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;
}
