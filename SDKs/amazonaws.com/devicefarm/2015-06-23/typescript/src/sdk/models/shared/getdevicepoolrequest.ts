import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDevicePoolRequest
/** 
 * Represents a request to the get device pool operation.
**/
export class GetDevicePoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
