import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggerDefinitionVersion } from "./loggerdefinitionversion";



export class GetLoggerDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: LoggerDefinitionVersion;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
