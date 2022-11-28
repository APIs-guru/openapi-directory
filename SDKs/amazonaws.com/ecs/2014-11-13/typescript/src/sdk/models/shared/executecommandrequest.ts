import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExecuteCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=interactive" })
  interactive: boolean;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task: string;
}
