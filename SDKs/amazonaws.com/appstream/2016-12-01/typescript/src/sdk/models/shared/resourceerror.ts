import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetErrorCodeEnum } from "./fleeterrorcodeenum";


// ResourceError
/** 
 * Describes a resource error.
**/
export class ResourceError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: FleetErrorCodeEnum;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=ErrorTimestamp" })
  errorTimestamp?: Date;
}
