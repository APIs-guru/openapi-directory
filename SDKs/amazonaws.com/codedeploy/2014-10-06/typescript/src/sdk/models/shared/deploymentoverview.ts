import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentOverview
/** 
 * Information about the deployment status of the instances in the deployment.
**/
export class DeploymentOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=Failed" })
  failed?: number;

  @Metadata({ data: "json, name=InProgress" })
  inProgress?: number;

  @Metadata({ data: "json, name=Pending" })
  pending?: number;

  @Metadata({ data: "json, name=Ready" })
  ready?: number;

  @Metadata({ data: "json, name=Skipped" })
  skipped?: number;

  @Metadata({ data: "json, name=Succeeded" })
  succeeded?: number;
}
