import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackRuleCompliance } from "./conformancepackrulecompliance";
export declare class DescribeConformancePackComplianceResponse extends SpeakeasyBase {
    conformancePackName: string;
    conformancePackRuleComplianceList: ConformancePackRuleCompliance[];
    nextToken?: string;
}
