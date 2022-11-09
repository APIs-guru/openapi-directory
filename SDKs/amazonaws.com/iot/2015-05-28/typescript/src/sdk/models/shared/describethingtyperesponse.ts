import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThingTypeMetadata } from "./thingtypemetadata";
import { ThingTypeProperties } from "./thingtypeproperties";


// DescribeThingTypeResponse
/** 
 * The output for the DescribeThingType operation.
**/
export class DescribeThingTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingTypeArn" })
  thingTypeArn?: string;

  @Metadata({ data: "json, name=thingTypeId" })
  thingTypeId?: string;

  @Metadata({ data: "json, name=thingTypeMetadata" })
  thingTypeMetadata?: ThingTypeMetadata;

  @Metadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;

  @Metadata({ data: "json, name=thingTypeProperties" })
  thingTypeProperties?: ThingTypeProperties;
}
