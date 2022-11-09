import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";


// AggregateConformancePackCompliance
/** 
 * <p>Provides the number of compliant and noncompliant rules within a conformance pack. Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
**/
export class AggregateConformancePackCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @Metadata({ data: "json, name=CompliantRuleCount" })
  compliantRuleCount?: number;

  @Metadata({ data: "json, name=NonCompliantRuleCount" })
  nonCompliantRuleCount?: number;

  @Metadata({ data: "json, name=TotalRuleCount" })
  totalRuleCount?: number;
}
