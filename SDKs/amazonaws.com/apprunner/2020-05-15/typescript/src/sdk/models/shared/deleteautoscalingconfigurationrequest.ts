import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAutoScalingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfigurationArn" })
  autoScalingConfigurationArn: string;
}
