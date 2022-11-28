import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";



// ConformancePackComplianceFilters
/** 
 * Filters the conformance pack by compliance types and Config rule names.
**/
export class ConformancePackComplianceFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];
}
