import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelatedDeployments
/** 
 * Information about deployments related to the specified deployment.
**/
export class RelatedDeployments extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoUpdateOutdatedInstancesDeploymentIds" })
  autoUpdateOutdatedInstancesDeploymentIds?: string[];

  @Metadata({ data: "json, name=autoUpdateOutdatedInstancesRootDeploymentId" })
  autoUpdateOutdatedInstancesRootDeploymentId?: string;
}
