import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetConfiguration
/** 
 * Information about the Convertible Reserved Instance offering.
**/
export class TargetConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceCount?: number;

  @SpeakeasyMetadata()
  offeringId?: string;
}
