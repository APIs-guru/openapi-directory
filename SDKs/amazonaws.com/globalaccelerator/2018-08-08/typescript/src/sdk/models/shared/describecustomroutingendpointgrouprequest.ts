import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;
}
