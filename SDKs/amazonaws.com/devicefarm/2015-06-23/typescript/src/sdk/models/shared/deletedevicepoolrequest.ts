import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDevicePoolRequest
/** 
 * Represents a request to the delete device pool operation.
**/
export class DeleteDevicePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
