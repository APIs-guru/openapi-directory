import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEndpointGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;
}
