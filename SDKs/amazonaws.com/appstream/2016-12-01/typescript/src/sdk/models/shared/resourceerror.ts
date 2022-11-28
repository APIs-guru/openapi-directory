import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetErrorCodeEnum } from "./fleeterrorcodeenum";



// ResourceError
/** 
 * Describes a resource error.
**/
export class ResourceError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: FleetErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorTimestamp" })
  errorTimestamp?: Date;
}
