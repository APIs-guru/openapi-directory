import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AggregateConformancePackComplianceCount
/** 
 * The number of conformance packs that are compliant and noncompliant.
**/
export class AggregateConformancePackComplianceCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompliantConformancePackCount" })
  compliantConformancePackCount?: number;

  @Metadata({ data: "json, name=NonCompliantConformancePackCount" })
  nonCompliantConformancePackCount?: number;
}
