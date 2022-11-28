import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CpuVendorArchitectureEnum } from "./cpuvendorarchitectureenum";



// RecommendationPreferences
/** 
 * Describes preferences for recommendations.
**/
export class RecommendationPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuVendorArchitectures" })
  cpuVendorArchitectures?: CpuVendorArchitectureEnum[];
}
