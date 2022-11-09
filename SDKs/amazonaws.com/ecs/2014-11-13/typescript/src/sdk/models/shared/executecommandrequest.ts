import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExecuteCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=container" })
  container?: string;

  @Metadata({ data: "json, name=interactive" })
  interactive: boolean;

  @Metadata({ data: "json, name=task" })
  task: string;
}
