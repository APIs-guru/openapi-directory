import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutLifecycleEventHookExecutionStatusOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifecycleEventHookExecutionId" })
  lifecycleEventHookExecutionId?: string;
}
