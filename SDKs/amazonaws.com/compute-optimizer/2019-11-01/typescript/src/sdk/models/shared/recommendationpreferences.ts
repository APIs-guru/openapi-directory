import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CpuVendorArchitectureEnum } from "./cpuvendorarchitectureenum";


// RecommendationPreferences
/** 
 * Describes preferences for recommendations.
**/
export class RecommendationPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuVendorArchitectures" })
  cpuVendorArchitectures?: CpuVendorArchitectureEnum[];
}
