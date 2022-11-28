import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=iotJobArn" })
  iotJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=iotJobId" })
  iotJobId?: string;
}
