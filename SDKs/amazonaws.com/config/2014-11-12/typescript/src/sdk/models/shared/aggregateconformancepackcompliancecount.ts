import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AggregateConformancePackComplianceCount
/** 
 * The number of conformance packs that are compliant and noncompliant.
**/
export class AggregateConformancePackComplianceCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompliantConformancePackCount" })
  compliantConformancePackCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantConformancePackCount" })
  nonCompliantConformancePackCount?: number;
}
