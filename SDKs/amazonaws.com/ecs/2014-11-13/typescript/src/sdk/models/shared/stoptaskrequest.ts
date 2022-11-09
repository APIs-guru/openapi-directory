import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=task" })
  task: string;
}
