import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// TagDescription
/** 
 * The tags associated with a load balancer.
**/
export class TagDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  loadBalancerName?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
