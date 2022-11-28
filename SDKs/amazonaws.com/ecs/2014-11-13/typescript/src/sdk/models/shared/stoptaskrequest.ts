import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task: string;
}
