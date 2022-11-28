import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThingConnectivity } from "./thingconnectivity";



// ThingDocument
/** 
 * The thing search index document.
**/
export class ThingDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=connectivity" })
  connectivity?: ThingConnectivity;

  @SpeakeasyMetadata({ data: "json, name=shadow" })
  shadow?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupNames" })
  thingGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=thingId" })
  thingId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;
}
