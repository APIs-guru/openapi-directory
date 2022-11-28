import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelatedDeployments
/** 
 * Information about deployments related to the specified deployment.
**/
export class RelatedDeployments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoUpdateOutdatedInstancesDeploymentIds" })
  autoUpdateOutdatedInstancesDeploymentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=autoUpdateOutdatedInstancesRootDeploymentId" })
  autoUpdateOutdatedInstancesRootDeploymentId?: string;
}
