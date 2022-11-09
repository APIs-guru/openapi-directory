import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateThingTypeResponse
/** 
 * The output of the CreateThingType operation.
**/
export class CreateThingTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingTypeArn" })
  thingTypeArn?: string;

  @Metadata({ data: "json, name=thingTypeId" })
  thingTypeId?: string;

  @Metadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;
}
