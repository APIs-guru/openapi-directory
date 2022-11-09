import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeCoverageReportSummary } from "./codecoveragereportsummary";
import { ReportExportConfig } from "./reportexportconfig";
import { ReportStatusTypeEnum } from "./reportstatustypeenum";
import { TestReportSummary } from "./testreportsummary";
import { ReportTypeEnum } from "./reporttypeenum";


// Report
/** 
 * Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests. 
**/
export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=codeCoverageSummary" })
  codeCoverageSummary?: CodeCoverageReportSummary;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=expired" })
  expired?: Date;

  @Metadata({ data: "json, name=exportConfig" })
  exportConfig?: ReportExportConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportGroupArn" })
  reportGroupArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: ReportStatusTypeEnum;

  @Metadata({ data: "json, name=testSummary" })
  testSummary?: TestReportSummary;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: ReportTypeEnum;
}
