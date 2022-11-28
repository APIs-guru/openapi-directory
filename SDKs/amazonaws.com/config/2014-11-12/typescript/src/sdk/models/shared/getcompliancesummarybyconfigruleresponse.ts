import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummary } from "./compliancesummary";



// GetComplianceSummaryByConfigRuleResponse
/** 
 * <p/>
**/
export class GetComplianceSummaryByConfigRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: ComplianceSummary;
}
