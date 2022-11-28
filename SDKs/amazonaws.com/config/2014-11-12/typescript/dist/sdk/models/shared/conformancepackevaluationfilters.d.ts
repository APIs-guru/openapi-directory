import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";
/**
 * Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.
**/
export declare class ConformancePackEvaluationFilters extends SpeakeasyBase {
    complianceType?: ConformancePackComplianceTypeEnum;
    configRuleNames?: string[];
    resourceIds?: string[];
    resourceType?: string;
}
