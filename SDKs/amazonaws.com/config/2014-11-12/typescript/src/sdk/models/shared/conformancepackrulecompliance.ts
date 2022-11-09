import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";


// ConformancePackRuleCompliance
/** 
 * Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.
**/
export class ConformancePackRuleCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;

  @Metadata({ data: "json, name=Controls" })
  controls?: string[];
}
