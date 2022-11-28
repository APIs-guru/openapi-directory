import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartBulkDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BulkDeploymentArn" })
  bulkDeploymentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BulkDeploymentId" })
  bulkDeploymentId?: string;
}
