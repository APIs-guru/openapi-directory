import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDistributionConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionConfigurationArn" })
  distributionConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
