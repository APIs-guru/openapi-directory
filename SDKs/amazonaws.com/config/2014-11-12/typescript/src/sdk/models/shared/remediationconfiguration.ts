import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionControls } from "./executioncontrols";
import { RemediationParameterValue } from "./remediationparametervalue";
import { RemediationTargetTypeEnum } from "./remediationtargettypeenum";



// RemediationConfiguration
/** 
 * An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
**/
export class RemediationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Automatic" })
  automatic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedByService" })
  createdByService?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionControls" })
  executionControls?: ExecutionControls;

  @SpeakeasyMetadata({ data: "json, name=MaximumAutomaticAttempts" })
  maximumAutomaticAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: RemediationParameterValue })
  parameters?: Map<string, RemediationParameterValue>;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=RetryAttemptSeconds" })
  retryAttemptSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType: RemediationTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetVersion" })
  targetVersion?: string;
}
