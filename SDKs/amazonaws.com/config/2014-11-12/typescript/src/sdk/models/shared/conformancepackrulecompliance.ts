import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";



// ConformancePackRuleCompliance
/** 
 * Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.
**/
export class ConformancePackRuleCompliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=Controls" })
  controls?: string[];
}
