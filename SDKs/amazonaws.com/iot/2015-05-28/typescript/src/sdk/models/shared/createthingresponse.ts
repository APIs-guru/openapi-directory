import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateThingResponse
/** 
 * The output of the CreateThing operation.
**/
export class CreateThingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingId" })
  thingId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;
}
