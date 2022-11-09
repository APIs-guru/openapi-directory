import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggerDefinitionVersion } from "./loggerdefinitionversion";


export class GetLoggerDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=Definition" })
  definition?: LoggerDefinitionVersion;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
