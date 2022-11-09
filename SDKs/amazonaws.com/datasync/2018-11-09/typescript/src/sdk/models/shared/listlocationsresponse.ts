import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationListEntry } from "./locationlistentry";


// ListLocationsResponse
/** 
 * ListLocationsResponse
**/
export class ListLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Locations", elemType: shared.LocationListEntry })
  locations?: LocationListEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
