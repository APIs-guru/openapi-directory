import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackEvaluationFilters } from "./conformancepackevaluationfilters";
export declare class GetConformancePackComplianceDetailsRequest extends SpeakeasyBase {
    conformancePackName: string;
    filters?: ConformancePackEvaluationFilters;
    limit?: number;
    nextToken?: string;
}
