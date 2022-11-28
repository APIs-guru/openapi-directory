import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
