import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdditionalAttribute
/** 
 * Information about additional load balancer attributes.
**/
export class AdditionalAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
