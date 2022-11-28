import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceCreditSpecification
/** 
 * Describes the credit option for CPU usage of a burstable performance instance. 
**/
export class InstanceCreditSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuCredits?: string;

  @SpeakeasyMetadata()
  instanceId?: string;
}
