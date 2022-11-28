import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuiteRunStatusEnum } from "./suiterunstatusenum";
import { SuiteRunConfiguration } from "./suiterunconfiguration";
import { TestResult } from "./testresult";



export class GetSuiteRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorReason" })
  errorReason?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SuiteRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteRunArn" })
  suiteRunArn?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteRunConfiguration" })
  suiteRunConfiguration?: SuiteRunConfiguration;

  @SpeakeasyMetadata({ data: "json, name=suiteRunId" })
  suiteRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=testResult" })
  testResult?: TestResult;
}
