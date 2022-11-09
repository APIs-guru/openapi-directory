import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SuiteRunStatusEnum } from "./suiterunstatusenum";
/**
 * Information about the suite run.
**/
export declare class SuiteRunInformation extends SpeakeasyBase {
    createdAt?: Date;
    endAt?: Date;
    failed?: number;
    passed?: number;
    startedAt?: Date;
    status?: SuiteRunStatusEnum;
    suiteDefinitionId?: string;
    suiteDefinitionName?: string;
    suiteDefinitionVersion?: string;
    suiteRunId?: string;
}
