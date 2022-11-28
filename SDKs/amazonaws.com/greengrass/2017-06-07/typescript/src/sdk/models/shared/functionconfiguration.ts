import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncodingTypeEnum } from "./encodingtypeenum";
import { FunctionConfigurationEnvironment } from "./functionconfigurationenvironment";



// FunctionConfiguration
/** 
 * The configuration of the Lambda function.
**/
export class FunctionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncodingType" })
  encodingType?: EncodingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: FunctionConfigurationEnvironment;

  @SpeakeasyMetadata({ data: "json, name=ExecArgs" })
  execArgs?: string;

  @SpeakeasyMetadata({ data: "json, name=Executable" })
  executable?: string;

  @SpeakeasyMetadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=Pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;
}
