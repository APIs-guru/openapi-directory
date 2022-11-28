import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionControls } from "./executioncontrols";
import { RemediationParameterValue } from "./remediationparametervalue";
import { RemediationTargetTypeEnum } from "./remediationtargettypeenum";
/**
 * An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
**/
export declare class RemediationConfiguration extends SpeakeasyBase {
    arn?: string;
    automatic?: boolean;
    configRuleName: string;
    createdByService?: string;
    executionControls?: ExecutionControls;
    maximumAutomaticAttempts?: number;
    parameters?: Map<string, RemediationParameterValue>;
    resourceType?: string;
    retryAttemptSeconds?: number;
    targetId: string;
    targetType: RemediationTargetTypeEnum;
    targetVersion?: string;
}
