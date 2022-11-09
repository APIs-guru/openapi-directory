import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifecycleErrorCodeEnum } from "./lifecycleerrorcodeenum";


// Diagnostics
/** 
 * Diagnostic information about executable scripts that are part of a deployment.
**/
export class Diagnostics extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: LifecycleErrorCodeEnum;

  @Metadata({ data: "json, name=logTail" })
  logTail?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=scriptName" })
  scriptName?: string;
}
