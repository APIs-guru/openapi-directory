import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEndpointGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;
}
