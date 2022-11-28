import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesConfiguration } from "./reservedinstancesconfiguration";



// ReservedInstancesModificationResult
/** 
 * Describes the modification request/s.
**/
export class ReservedInstancesModificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservedInstancesId?: string;

  @SpeakeasyMetadata()
  targetConfiguration?: ReservedInstancesConfiguration;
}
