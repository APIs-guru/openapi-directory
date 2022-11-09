import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BulkDeployment
/** 
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
**/
export class BulkDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=BulkDeploymentArn" })
  bulkDeploymentArn?: string;

  @Metadata({ data: "json, name=BulkDeploymentId" })
  bulkDeploymentId?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;
}
