import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";
/**
 * Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.
**/
export declare class AggregateConformancePackComplianceFilters extends SpeakeasyBase {
    accountId?: string;
    awsRegion?: string;
    complianceType?: ConformancePackComplianceTypeEnum;
    conformancePackName?: string;
}
