import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationFilter } from "./locationfilter";



// ListLocationsRequest
/** 
 * ListLocationsRequest
**/
export class ListLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: LocationFilter })
  filters?: LocationFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
