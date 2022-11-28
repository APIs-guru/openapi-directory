import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=codeCoverageSummary" })
  codeCoverageSummary?: CodeCoverageReportSummary;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=expired" })
  expired?: Date;

  @SpeakeasyMetadata({ data: "json, name=exportConfig" })
  exportConfig?: ReportExportConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportGroupArn" })
  reportGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReportStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=testSummary" })
  testSummary?: TestReportSummary;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReportTypeEnum;
}
