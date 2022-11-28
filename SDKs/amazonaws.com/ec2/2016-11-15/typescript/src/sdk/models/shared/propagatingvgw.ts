import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PropagatingVgw
/** 
 * Describes a virtual private gateway propagating route.
**/
export class PropagatingVgw extends SpeakeasyBase {
  @SpeakeasyMetadata()
  gatewayId?: string;
}
