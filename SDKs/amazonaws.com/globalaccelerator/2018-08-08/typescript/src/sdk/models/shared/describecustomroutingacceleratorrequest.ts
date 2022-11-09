import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
