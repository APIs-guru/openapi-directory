import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListCustomRoutingPortMappingsByDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationAddress" })
  destinationAddress: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
