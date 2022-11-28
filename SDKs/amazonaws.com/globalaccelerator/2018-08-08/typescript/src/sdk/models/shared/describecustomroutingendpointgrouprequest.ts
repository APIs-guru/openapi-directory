import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;
}
