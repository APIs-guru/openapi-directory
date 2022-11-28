import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
