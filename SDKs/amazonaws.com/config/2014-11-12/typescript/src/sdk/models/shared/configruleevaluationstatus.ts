import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigRuleEvaluationStatus
/** 
 * <p>Status information for your Config managed rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom Config rules.</p>
**/
export class ConfigRuleEvaluationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleArn" })
  configRuleArn?: string;

  @Metadata({ data: "json, name=ConfigRuleId" })
  configRuleId?: string;

  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;

  @Metadata({ data: "json, name=FirstActivatedTime" })
  firstActivatedTime?: Date;

  @Metadata({ data: "json, name=FirstEvaluationStarted" })
  firstEvaluationStarted?: boolean;

  @Metadata({ data: "json, name=LastDeactivatedTime" })
  lastDeactivatedTime?: Date;

  @Metadata({ data: "json, name=LastErrorCode" })
  lastErrorCode?: string;

  @Metadata({ data: "json, name=LastErrorMessage" })
  lastErrorMessage?: string;

  @Metadata({ data: "json, name=LastFailedEvaluationTime" })
  lastFailedEvaluationTime?: Date;

  @Metadata({ data: "json, name=LastFailedInvocationTime" })
  lastFailedInvocationTime?: Date;

  @Metadata({ data: "json, name=LastSuccessfulEvaluationTime" })
  lastSuccessfulEvaluationTime?: Date;

  @Metadata({ data: "json, name=LastSuccessfulInvocationTime" })
  lastSuccessfulInvocationTime?: Date;
}
