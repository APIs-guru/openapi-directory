import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
