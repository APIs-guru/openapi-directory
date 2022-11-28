import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeBooleanValue } from "./attributebooleanvalue";



export class DescribeVpcAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enableDnsHostnames?: AttributeBooleanValue;

  @SpeakeasyMetadata()
  enableDnsSupport?: AttributeBooleanValue;

  @SpeakeasyMetadata()
  vpcId?: string;
}
