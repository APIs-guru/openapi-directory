import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInfrastructureConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
