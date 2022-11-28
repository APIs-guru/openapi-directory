import { SpeakeasyBase } from "../../../internal/utils";
import { UnlimitedSupportedInstanceFamilyEnum } from "./unlimitedsupportedinstancefamilyenum";
/**
 * Describes the default credit option for CPU usage of a burstable performance instance family.
**/
export declare class InstanceFamilyCreditSpecification extends SpeakeasyBase {
    cpuCredits?: string;
    instanceFamily?: UnlimitedSupportedInstanceFamilyEnum;
}
