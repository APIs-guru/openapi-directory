import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThingAttribute } from "./thingattribute";



// ListThingsResponse
/** 
 * The output from the ListThings operation.
**/
export class ListThingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=things", elemType: ThingAttribute })
  things?: ThingAttribute[];
}
