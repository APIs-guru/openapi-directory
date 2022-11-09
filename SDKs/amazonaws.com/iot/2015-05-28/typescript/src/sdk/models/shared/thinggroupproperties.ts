import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributePayload } from "./attributepayload";


// ThingGroupProperties
/** 
 * Thing group properties.
**/
export class ThingGroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributePayload" })
  attributePayload?: AttributePayload;

  @Metadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;
}
