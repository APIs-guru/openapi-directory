import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListCustomRoutingPortMappingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
