import { SpeakeasyBase } from "../../../internal/utils";
import { CodeCoverageReportSummary } from "./codecoveragereportsummary";
import { ReportExportConfig } from "./reportexportconfig";
import { ReportStatusTypeEnum } from "./reportstatustypeenum";
import { TestReportSummary } from "./testreportsummary";
import { ReportTypeEnum } from "./reporttypeenum";
/**
 * Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.
**/
export declare class Report extends SpeakeasyBase {
    arn?: string;
    codeCoverageSummary?: CodeCoverageReportSummary;
    created?: Date;
    executionId?: string;
    expired?: Date;
    exportConfig?: ReportExportConfig;
    name?: string;
    reportGroupArn?: string;
    status?: ReportStatusTypeEnum;
    testSummary?: TestReportSummary;
    truncated?: boolean;
    type?: ReportTypeEnum;
}
