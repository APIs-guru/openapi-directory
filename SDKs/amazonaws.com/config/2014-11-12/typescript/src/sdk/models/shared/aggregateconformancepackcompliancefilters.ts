import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";


// AggregateConformancePackComplianceFilters
/** 
 * Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.
**/
export class AggregateConformancePackComplianceFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName?: string;
}
