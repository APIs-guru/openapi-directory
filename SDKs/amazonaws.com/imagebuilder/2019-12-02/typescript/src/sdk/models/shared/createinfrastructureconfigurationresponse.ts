import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateInfrastructureConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
