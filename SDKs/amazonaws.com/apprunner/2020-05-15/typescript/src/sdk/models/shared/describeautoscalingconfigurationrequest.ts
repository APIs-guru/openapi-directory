import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAutoScalingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfigurationArn" })
  autoScalingConfigurationArn: string;
}
