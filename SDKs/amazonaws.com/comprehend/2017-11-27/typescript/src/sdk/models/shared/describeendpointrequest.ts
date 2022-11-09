import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
