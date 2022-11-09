import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";


// EnableIoTLoggingParams
/** 
 * Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.
**/
export class EnableIoTLoggingParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=logLevel" })
  logLevel: LogLevelEnum;

  @Metadata({ data: "json, name=roleArnForLogging" })
  roleArnForLogging: string;
}
