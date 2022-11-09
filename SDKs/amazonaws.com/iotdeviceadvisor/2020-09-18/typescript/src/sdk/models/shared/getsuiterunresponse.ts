import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuiteRunStatusEnum } from "./suiterunstatusenum";
import { SuiteRunConfiguration } from "./suiterunconfiguration";
import { TestResult } from "./testresult";


export class GetSuiteRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=errorReason" })
  errorReason?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: SuiteRunStatusEnum;

  @Metadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @Metadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;

  @Metadata({ data: "json, name=suiteRunArn" })
  suiteRunArn?: string;

  @Metadata({ data: "json, name=suiteRunConfiguration" })
  suiteRunConfiguration?: SuiteRunConfiguration;

  @Metadata({ data: "json, name=suiteRunId" })
  suiteRunId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=testResult" })
  testResult?: TestResult;
}
