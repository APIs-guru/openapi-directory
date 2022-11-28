import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggerComponentEnum } from "./loggercomponentenum";
import { LoggerLevelEnum } from "./loggerlevelenum";
import { LoggerTypeEnum } from "./loggertypeenum";



// Logger
/** 
 * Information about a logger
**/
export class Logger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Component" })
  component: LoggerComponentEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Level" })
  level: LoggerLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=Space" })
  space?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: LoggerTypeEnum;
}
