import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";
/**
 * Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.
**/
export declare class ConformancePackRuleCompliance extends SpeakeasyBase {
    complianceType?: ConformancePackComplianceTypeEnum;
    configRuleName?: string;
    controls?: string[];
}
