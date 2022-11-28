import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAcceleratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
