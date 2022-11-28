import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateConformancePackCompliance } from "./aggregateconformancepackcompliance";



// AggregateComplianceByConformancePack
/** 
 * <p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
**/
export class AggregateComplianceByConformancePack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=Compliance" })
  compliance?: AggregateConformancePackCompliance;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName?: string;
}
