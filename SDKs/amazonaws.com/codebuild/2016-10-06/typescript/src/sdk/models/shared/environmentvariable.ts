import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentVariableTypeEnum } from "./environmentvariabletypeenum";



// EnvironmentVariable
/** 
 * Information about an environment variable for a build project or a build.
**/
export class EnvironmentVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EnvironmentVariableTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
