import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about a test report.
**/
export declare class TestReportSummary extends SpeakeasyBase {
    durationInNanoSeconds: number;
    statusCounts: Map<string, number>;
    total: number;
}
