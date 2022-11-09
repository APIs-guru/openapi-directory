import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDeviceRequest
/** 
 * Represents a request to the get device request.
**/
export class GetDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
