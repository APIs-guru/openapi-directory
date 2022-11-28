import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateInfrastructureConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
