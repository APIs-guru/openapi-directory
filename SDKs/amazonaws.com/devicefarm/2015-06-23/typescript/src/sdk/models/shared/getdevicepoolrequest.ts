import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDevicePoolRequest
/** 
 * Represents a request to the get device pool operation.
**/
export class GetDevicePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
