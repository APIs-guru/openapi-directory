import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceSummary } from "./compliancesummary";


// GetComplianceSummaryByConfigRuleResponse
/** 
 * <p/>
**/
export class GetComplianceSummaryByConfigRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: ComplianceSummary;
}
