import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";


// ConformancePackComplianceFilters
/** 
 * Filters the conformance pack by compliance types and Config rule names.
**/
export class ConformancePackComplianceFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @Metadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];
}
