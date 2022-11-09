import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInfrastructureConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
