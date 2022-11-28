import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";



// EnableIoTLoggingParams
/** 
 * Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.
**/
export class EnableIoTLoggingParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArnForLogging" })
  roleArnForLogging: string;
}
