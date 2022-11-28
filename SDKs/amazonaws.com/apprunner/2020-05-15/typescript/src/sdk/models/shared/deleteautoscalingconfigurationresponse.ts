import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingConfiguration } from "./autoscalingconfiguration";



export class DeleteAutoScalingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfiguration" })
  autoScalingConfiguration: AutoScalingConfiguration;
}
