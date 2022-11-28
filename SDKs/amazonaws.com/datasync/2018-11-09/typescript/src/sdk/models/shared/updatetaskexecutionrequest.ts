import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Options } from "./options";



export class UpdateTaskExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Options" })
  options: Options;

  @SpeakeasyMetadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn: string;
}
