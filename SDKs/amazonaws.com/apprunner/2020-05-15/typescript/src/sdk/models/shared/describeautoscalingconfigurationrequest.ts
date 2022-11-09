import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAutoScalingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingConfigurationArn" })
  autoScalingConfigurationArn: string;
}
