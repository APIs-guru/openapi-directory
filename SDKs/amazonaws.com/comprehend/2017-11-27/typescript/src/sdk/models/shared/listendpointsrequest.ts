import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointFilter } from "./endpointfilter";


export class ListEndpointsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: EndpointFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
