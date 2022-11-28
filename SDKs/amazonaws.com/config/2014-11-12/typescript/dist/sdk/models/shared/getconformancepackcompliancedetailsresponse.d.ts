import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackEvaluationResult } from "./conformancepackevaluationresult";
export declare class GetConformancePackComplianceDetailsResponse extends SpeakeasyBase {
    conformancePackName: string;
    conformancePackRuleEvaluationResults?: ConformancePackEvaluationResult[];
    nextToken?: string;
}
