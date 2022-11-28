import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointFilter } from "./endpointfilter";



export class ListEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: EndpointFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
