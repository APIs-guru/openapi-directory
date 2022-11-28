import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about potential recommendations that might be created from the analysis of profiling data.
**/
export declare class FindingsReportSummary extends SpeakeasyBase {
    id?: string;
    profileEndTime?: Date;
    profileStartTime?: Date;
    profilingGroupName?: string;
    totalNumberOfFindings?: number;
}
