import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThingTypeMetadata } from "./thingtypemetadata";
import { ThingTypeProperties } from "./thingtypeproperties";



// DescribeThingTypeResponse
/** 
 * The output for the DescribeThingType operation.
**/
export class DescribeThingTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingTypeArn" })
  thingTypeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeId" })
  thingTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeMetadata" })
  thingTypeMetadata?: ThingTypeMetadata;

  @SpeakeasyMetadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeProperties" })
  thingTypeProperties?: ThingTypeProperties;
}
