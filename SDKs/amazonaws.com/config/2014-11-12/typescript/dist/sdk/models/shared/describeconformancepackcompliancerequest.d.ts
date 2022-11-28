import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceFilters } from "./conformancepackcompliancefilters";
export declare class DescribeConformancePackComplianceRequest extends SpeakeasyBase {
    conformancePackName: string;
    filters?: ConformancePackComplianceFilters;
    limit?: number;
    nextToken?: string;
}
