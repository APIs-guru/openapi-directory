import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";



// LoadBalancerDescription
/** 
 * Describes the details of a LoadBalancer.
**/
export class LoadBalancerDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domain?: string;

  @SpeakeasyMetadata({ elemType: Listener })
  listeners?: Listener[];

  @SpeakeasyMetadata()
  loadBalancerName?: string;
}
