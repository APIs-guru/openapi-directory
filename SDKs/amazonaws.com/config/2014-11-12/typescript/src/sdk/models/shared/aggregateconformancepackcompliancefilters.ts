import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";



// AggregateConformancePackComplianceFilters
/** 
 * Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.
**/
export class AggregateConformancePackComplianceFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName?: string;
}
