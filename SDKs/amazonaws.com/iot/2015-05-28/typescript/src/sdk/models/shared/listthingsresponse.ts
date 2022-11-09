import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThingAttribute } from "./thingattribute";


// ListThingsResponse
/** 
 * The output from the ListThings operation.
**/
export class ListThingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=things", elemType: shared.ThingAttribute })
  things?: ThingAttribute[];
}
