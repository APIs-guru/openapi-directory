import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributePayload } from "./attributepayload";



// ThingGroupProperties
/** 
 * Thing group properties.
**/
export class ThingGroupProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributePayload" })
  attributePayload?: AttributePayload;

  @SpeakeasyMetadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;
}
