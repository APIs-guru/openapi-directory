import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAcceleratorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
