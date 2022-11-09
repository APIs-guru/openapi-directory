import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Logger } from "./logger";


// LoggerDefinitionVersion
/** 
 * Information about a logger definition version.
**/
export class LoggerDefinitionVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Loggers", elemType: shared.Logger })
  loggers?: Logger[];
}
