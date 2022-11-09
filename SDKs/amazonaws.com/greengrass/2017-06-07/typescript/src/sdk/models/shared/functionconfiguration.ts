import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncodingTypeEnum } from "./encodingtypeenum";
import { FunctionConfigurationEnvironment } from "./functionconfigurationenvironment";


// FunctionConfiguration
/** 
 * The configuration of the Lambda function.
**/
export class FunctionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncodingType" })
  encodingType?: EncodingTypeEnum;

  @Metadata({ data: "json, name=Environment" })
  environment?: FunctionConfigurationEnvironment;

  @Metadata({ data: "json, name=ExecArgs" })
  execArgs?: string;

  @Metadata({ data: "json, name=Executable" })
  executable?: string;

  @Metadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @Metadata({ data: "json, name=Pinned" })
  pinned?: boolean;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;
}
