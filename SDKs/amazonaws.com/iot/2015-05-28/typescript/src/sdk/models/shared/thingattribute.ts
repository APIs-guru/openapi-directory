import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThingAttribute
/** 
 * The properties of the thing, including thing name, thing type name, and a list of thing attributes.
**/
export class ThingAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;

  @Metadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
