import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=iotJobArn" })
  iotJobArn?: string;

  @Metadata({ data: "json, name=iotJobId" })
  iotJobId?: string;
}
