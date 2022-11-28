import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTaskLifecycleEnum } from "./datarepositorytasklifecycleenum";



export class CancelDataRepositoryTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: DataRepositoryTaskLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=TaskId" })
  taskId?: string;
}
