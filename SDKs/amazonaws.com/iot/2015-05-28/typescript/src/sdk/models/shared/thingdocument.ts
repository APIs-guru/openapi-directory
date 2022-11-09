import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThingConnectivity } from "./thingconnectivity";


// ThingDocument
/** 
 * The thing search index document.
**/
export class ThingDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=connectivity" })
  connectivity?: ThingConnectivity;

  @Metadata({ data: "json, name=shadow" })
  shadow?: string;

  @Metadata({ data: "json, name=thingGroupNames" })
  thingGroupNames?: string[];

  @Metadata({ data: "json, name=thingId" })
  thingId?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;

  @Metadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;
}
