import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigRuleEvaluationStatus
/** 
 * <p>Status information for your Config managed rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom Config rules.</p>
**/
export class ConfigRuleEvaluationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleArn" })
  configRuleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleId" })
  configRuleId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstActivatedTime" })
  firstActivatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FirstEvaluationStarted" })
  firstEvaluationStarted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastDeactivatedTime" })
  lastDeactivatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastErrorCode" })
  lastErrorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=LastErrorMessage" })
  lastErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastFailedEvaluationTime" })
  lastFailedEvaluationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastFailedInvocationTime" })
  lastFailedInvocationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastSuccessfulEvaluationTime" })
  lastSuccessfulEvaluationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastSuccessfulInvocationTime" })
  lastSuccessfulInvocationTime?: Date;
}
