import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceKey } from "./resourcekey";
import { RemediationExecutionStateEnum } from "./remediationexecutionstateenum";
import { RemediationExecutionStep } from "./remediationexecutionstep";


// RemediationExecutionStatus
/** 
 * Provides details of the current status of the invoked remediation action for that resource.
**/
export class RemediationExecutionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvocationTime" })
  invocationTime?: Date;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=ResourceKey" })
  resourceKey?: ResourceKey;

  @Metadata({ data: "json, name=State" })
  state?: RemediationExecutionStateEnum;

  @Metadata({ data: "json, name=StepDetails", elemType: shared.RemediationExecutionStep })
  stepDetails?: RemediationExecutionStep[];
}
