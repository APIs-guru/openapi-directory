import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartBulkDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BulkDeploymentArn" })
  bulkDeploymentArn?: string;

  @Metadata({ data: "json, name=BulkDeploymentId" })
  bulkDeploymentId?: string;
}
