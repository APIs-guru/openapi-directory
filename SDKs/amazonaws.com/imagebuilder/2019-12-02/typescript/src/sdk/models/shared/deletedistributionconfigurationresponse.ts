import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDistributionConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributionConfigurationArn" })
  distributionConfigurationArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
