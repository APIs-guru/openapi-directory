import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerDescription } from "./loadbalancerdescription";



// EnvironmentResourcesDescription
/** 
 * Describes the AWS resources in use by this environment. This data is not live data.
**/
export class EnvironmentResourcesDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  loadBalancer?: LoadBalancerDescription;
}
