import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetErrorCodeEnum } from "./fleeterrorcodeenum";


// FleetError
/** 
 * Describes a fleet error.
**/
export class FleetError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: FleetErrorCodeEnum;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
