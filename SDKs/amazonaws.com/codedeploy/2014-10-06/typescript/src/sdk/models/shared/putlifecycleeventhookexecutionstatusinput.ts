import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifecycleEventStatusEnum } from "./lifecycleeventstatusenum";


export class PutLifecycleEventHookExecutionStatusInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=lifecycleEventHookExecutionId" })
  lifecycleEventHookExecutionId?: string;

  @Metadata({ data: "json, name=status" })
  status?: LifecycleEventStatusEnum;
}
