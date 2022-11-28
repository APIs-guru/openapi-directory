import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListingStateEnum } from "./listingstateenum";



// InstanceCount
/** 
 * Describes a Reserved Instance listing state.
**/
export class InstanceCount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceCount?: number;

  @SpeakeasyMetadata()
  state?: ListingStateEnum;
}
