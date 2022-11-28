import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationListEntry } from "./locationlistentry";



// ListLocationsResponse
/** 
 * ListLocationsResponse
**/
export class ListLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Locations", elemType: LocationListEntry })
  locations?: LocationListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
