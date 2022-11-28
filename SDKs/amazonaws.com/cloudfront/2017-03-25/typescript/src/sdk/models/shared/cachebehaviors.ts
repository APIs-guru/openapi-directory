import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheBehavior } from "./cachebehavior";



// CacheBehaviors
/** 
 * A complex type that contains zero or more <code>CacheBehavior</code> elements. 
**/
export class CacheBehaviors extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheBehavior })
  items?: CacheBehavior[];

  @SpeakeasyMetadata()
  quantity: number;
}
