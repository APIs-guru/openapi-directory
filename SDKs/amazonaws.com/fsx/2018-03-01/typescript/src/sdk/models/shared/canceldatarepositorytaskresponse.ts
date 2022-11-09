import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataRepositoryTaskLifecycleEnum } from "./datarepositorytasklifecycleenum";


export class CancelDataRepositoryTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: DataRepositoryTaskLifecycleEnum;

  @Metadata({ data: "json, name=TaskId" })
  taskId?: string;
}
