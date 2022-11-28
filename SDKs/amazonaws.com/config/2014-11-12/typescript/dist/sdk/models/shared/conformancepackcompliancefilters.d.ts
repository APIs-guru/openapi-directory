import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";
/**
 * Filters the conformance pack by compliance types and Config rule names.
**/
export declare class ConformancePackComplianceFilters extends SpeakeasyBase {
    complianceType?: ConformancePackComplianceTypeEnum;
    configRuleNames?: string[];
}
