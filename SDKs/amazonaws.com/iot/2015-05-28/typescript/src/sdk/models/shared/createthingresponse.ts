import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateThingResponse
/** 
 * The output of the CreateThing operation.
**/
export class CreateThingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=thingId" })
  thingId?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}
