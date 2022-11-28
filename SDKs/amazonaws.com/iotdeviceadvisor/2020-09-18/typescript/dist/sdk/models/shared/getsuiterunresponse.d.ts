import { SpeakeasyBase } from "../../../internal/utils";
import { SuiteRunStatusEnum } from "./suiterunstatusenum";
import { SuiteRunConfiguration } from "./suiterunconfiguration";
import { TestResult } from "./testresult";
export declare class GetSuiteRunResponse extends SpeakeasyBase {
    endTime?: Date;
    errorReason?: string;
    startTime?: Date;
    status?: SuiteRunStatusEnum;
    suiteDefinitionId?: string;
    suiteDefinitionVersion?: string;
    suiteRunArn?: string;
    suiteRunConfiguration?: SuiteRunConfiguration;
    suiteRunId?: string;
    tags?: Map<string, string>;
    testResult?: TestResult;
}
