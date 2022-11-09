import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentVariableTypeEnum } from "./environmentvariabletypeenum";


// EnvironmentVariable
/** 
 * Information about an environment variable for a build project or a build.
**/
export class EnvironmentVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type?: EnvironmentVariableTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
