import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveCustomRoutingEndpointsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;

  @Metadata({ data: "json, name=EndpointIds" })
  endpointIds: string[];
}
