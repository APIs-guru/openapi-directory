import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionControls } from "./executioncontrols";
import { RemediationParameterValue } from "./remediationparametervalue";
import { RemediationTargetTypeEnum } from "./remediationtargettypeenum";


// RemediationConfiguration
/** 
 * An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
**/
export class RemediationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Automatic" })
  automatic?: boolean;

  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @Metadata({ data: "json, name=CreatedByService" })
  createdByService?: string;

  @Metadata({ data: "json, name=ExecutionControls" })
  executionControls?: ExecutionControls;

  @Metadata({ data: "json, name=MaximumAutomaticAttempts" })
  maximumAutomaticAttempts?: number;

  @Metadata({ data: "json, name=Parameters", elemType: shared.RemediationParameterValue })
  parameters?: Map<string, RemediationParameterValue>;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=RetryAttemptSeconds" })
  retryAttemptSeconds?: number;

  @Metadata({ data: "json, name=TargetId" })
  targetId: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType: RemediationTargetTypeEnum;

  @Metadata({ data: "json, name=TargetVersion" })
  targetVersion?: string;
}
