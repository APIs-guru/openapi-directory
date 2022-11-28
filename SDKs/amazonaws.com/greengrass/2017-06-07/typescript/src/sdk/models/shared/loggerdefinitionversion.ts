import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Logger } from "./logger";



// LoggerDefinitionVersion
/** 
 * Information about a logger definition version.
**/
export class LoggerDefinitionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Loggers", elemType: Logger })
  loggers?: Logger[];
}
