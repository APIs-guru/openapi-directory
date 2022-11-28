import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecycleErrorCodeEnum } from "./lifecycleerrorcodeenum";



// Diagnostics
/** 
 * Diagnostic information about executable scripts that are part of a deployment.
**/
export class Diagnostics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: LifecycleErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=logTail" })
  logTail?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptName" })
  scriptName?: string;
}
