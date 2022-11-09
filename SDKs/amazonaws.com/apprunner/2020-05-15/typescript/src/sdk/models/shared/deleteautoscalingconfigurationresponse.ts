import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingConfiguration } from "./autoscalingconfiguration";


export class DeleteAutoScalingConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingConfiguration" })
  autoScalingConfiguration: AutoScalingConfiguration;
}
