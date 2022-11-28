import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoadBalancerAttribute
/** 
 * Information about a load balancer attribute.
**/
export class LoadBalancerAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
