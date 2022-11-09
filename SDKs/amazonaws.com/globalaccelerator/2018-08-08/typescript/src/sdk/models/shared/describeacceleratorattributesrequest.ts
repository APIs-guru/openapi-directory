import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAcceleratorAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
