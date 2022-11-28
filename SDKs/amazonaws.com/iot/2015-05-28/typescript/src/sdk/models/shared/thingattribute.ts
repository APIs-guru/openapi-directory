import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThingAttribute
/** 
 * The properties of the thing, including thing name, thing type name, and a list of thing attributes.
**/
export class ThingAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
