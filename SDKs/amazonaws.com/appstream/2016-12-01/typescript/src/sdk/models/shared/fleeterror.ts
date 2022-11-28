import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetErrorCodeEnum } from "./fleeterrorcodeenum";



// FleetError
/** 
 * Describes a fleet error.
**/
export class FleetError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: FleetErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
