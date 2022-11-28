import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnlimitedSupportedInstanceFamilyEnum } from "./unlimitedsupportedinstancefamilyenum";



// InstanceFamilyCreditSpecification
/** 
 * Describes the default credit option for CPU usage of a burstable performance instance family.
**/
export class InstanceFamilyCreditSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuCredits?: string;

  @SpeakeasyMetadata()
  instanceFamily?: UnlimitedSupportedInstanceFamilyEnum;
}
