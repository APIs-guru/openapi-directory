import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListCustomRoutingPortMappingsByDestinationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationAddress" })
  destinationAddress: string;

  @Metadata({ data: "json, name=EndpointId" })
  endpointId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
