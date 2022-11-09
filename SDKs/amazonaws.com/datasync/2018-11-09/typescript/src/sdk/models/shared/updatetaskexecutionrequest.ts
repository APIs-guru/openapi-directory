import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Options } from "./options";


export class UpdateTaskExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Options" })
  options: Options;

  @Metadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn: string;
}
