import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListCustomRoutingPortMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
