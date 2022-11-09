import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDevicePoolRequest
/** 
 * Represents a request to the delete device pool operation.
**/
export class DeleteDevicePoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
