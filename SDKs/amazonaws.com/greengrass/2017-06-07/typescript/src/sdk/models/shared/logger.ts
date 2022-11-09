import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggerComponentEnum } from "./loggercomponentenum";
import { LoggerLevelEnum } from "./loggerlevelenum";
import { LoggerTypeEnum } from "./loggertypeenum";


// Logger
/** 
 * Information about a logger
**/
export class Logger extends SpeakeasyBase {
  @Metadata({ data: "json, name=Component" })
  component: LoggerComponentEnum;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Level" })
  level: LoggerLevelEnum;

  @Metadata({ data: "json, name=Space" })
  space?: number;

  @Metadata({ data: "json, name=Type" })
  type: LoggerTypeEnum;
}
