import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveCustomRoutingEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointIds" })
  endpointIds: string[];
}
