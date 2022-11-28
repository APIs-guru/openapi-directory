import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentOverview
/** 
 * Information about the deployment status of the instances in the deployment.
**/
export class DeploymentOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=InProgress" })
  inProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=Pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=Ready" })
  ready?: number;

  @SpeakeasyMetadata({ data: "json, name=Skipped" })
  skipped?: number;

  @SpeakeasyMetadata({ data: "json, name=Succeeded" })
  succeeded?: number;
}
