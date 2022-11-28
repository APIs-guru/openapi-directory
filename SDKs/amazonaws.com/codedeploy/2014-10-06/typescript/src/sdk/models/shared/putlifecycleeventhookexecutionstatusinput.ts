import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEventStatusEnum } from "./lifecycleeventstatusenum";



export class PutLifecycleEventHookExecutionStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycleEventHookExecutionId" })
  lifecycleEventHookExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LifecycleEventStatusEnum;
}
