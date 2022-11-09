import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartDeploymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
