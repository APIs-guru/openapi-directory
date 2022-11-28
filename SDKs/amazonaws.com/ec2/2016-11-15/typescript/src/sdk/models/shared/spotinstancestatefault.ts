import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpotInstanceStateFault
/** 
 * Describes a Spot Instance state change.
**/
export class SpotInstanceStateFault extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
