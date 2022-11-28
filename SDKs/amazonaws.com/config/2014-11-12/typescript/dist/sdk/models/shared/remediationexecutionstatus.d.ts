import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";
import { RemediationExecutionStateEnum } from "./remediationexecutionstateenum";
import { RemediationExecutionStep } from "./remediationexecutionstep";
/**
 * Provides details of the current status of the invoked remediation action for that resource.
**/
export declare class RemediationExecutionStatus extends SpeakeasyBase {
    invocationTime?: Date;
    lastUpdatedTime?: Date;
    resourceKey?: ResourceKey;
    state?: RemediationExecutionStateEnum;
    stepDetails?: RemediationExecutionStep[];
}
