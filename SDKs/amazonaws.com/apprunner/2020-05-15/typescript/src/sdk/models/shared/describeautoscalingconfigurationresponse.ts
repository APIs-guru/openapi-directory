import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingConfiguration } from "./autoscalingconfiguration";



export class DescribeAutoScalingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfiguration" })
  autoScalingConfiguration: AutoScalingConfiguration;
}
