import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationFilter } from "./locationfilter";


// ListLocationsRequest
/** 
 * ListLocationsRequest
**/
export class ListLocationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.LocationFilter })
  filters?: LocationFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
