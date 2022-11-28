import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateThingTypeResponse
/** 
 * The output of the CreateThingType operation.
**/
export class CreateThingTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingTypeArn" })
  thingTypeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeId" })
  thingTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;
}
