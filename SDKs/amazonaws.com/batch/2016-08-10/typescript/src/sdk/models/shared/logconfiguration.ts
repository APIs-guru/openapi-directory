import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogDriverEnum } from "./logdriverenum";
import { Secret } from "./secret";



// LogConfiguration
/** 
 * Log configuration options to send to a custom log driver for the container.
**/
export class LogConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logDriver" })
  logDriver: LogDriverEnum;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=secretOptions", elemType: Secret })
  secretOptions?: Secret[];
}
