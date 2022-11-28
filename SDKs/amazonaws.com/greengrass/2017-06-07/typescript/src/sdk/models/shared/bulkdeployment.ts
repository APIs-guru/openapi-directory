import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BulkDeployment
/** 
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
**/
export class BulkDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BulkDeploymentArn" })
  bulkDeploymentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BulkDeploymentId" })
  bulkDeploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;
}
