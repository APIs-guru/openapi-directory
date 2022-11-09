import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogDriverEnum } from "./logdriverenum";
import { Secret } from "./secret";


// LogConfiguration
/** 
 * Log configuration options to send to a custom log driver for the container.
**/
export class LogConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=logDriver" })
  logDriver: LogDriverEnum;

  @Metadata({ data: "json, name=options" })
  options?: Map<string, string>;

  @Metadata({ data: "json, name=secretOptions", elemType: shared.Secret })
  secretOptions?: Secret[];
}
