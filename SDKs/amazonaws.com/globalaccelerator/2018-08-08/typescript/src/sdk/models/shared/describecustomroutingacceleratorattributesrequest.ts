import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
