import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";
/**
 * Provides test case run.
**/
export declare class TestCaseRun extends SpeakeasyBase {
    endTime?: Date;
    failure?: string;
    logUrl?: string;
    startTime?: Date;
    status?: StatusEnum;
    testCaseDefinitionId?: string;
    testCaseDefinitionName?: string;
    testCaseRunId?: string;
    warnings?: string;
}
