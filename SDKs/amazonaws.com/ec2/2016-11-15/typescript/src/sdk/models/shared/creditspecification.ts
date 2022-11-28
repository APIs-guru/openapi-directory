import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreditSpecification
/** 
 * Describes the credit option for CPU usage of a T2, T3, or T3a instance.
**/
export class CreditSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuCredits?: string;
}
