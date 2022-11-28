import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAcceleratorAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
