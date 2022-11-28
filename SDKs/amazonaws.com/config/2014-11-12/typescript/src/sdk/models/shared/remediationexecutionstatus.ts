import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";
import { RemediationExecutionStateEnum } from "./remediationexecutionstateenum";
import { RemediationExecutionStep } from "./remediationexecutionstep";



// RemediationExecutionStatus
/** 
 * Provides details of the current status of the invoked remediation action for that resource.
**/
export class RemediationExecutionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvocationTime" })
  invocationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceKey" })
  resourceKey?: ResourceKey;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: RemediationExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StepDetails", elemType: RemediationExecutionStep })
  stepDetails?: RemediationExecutionStep[];
}
