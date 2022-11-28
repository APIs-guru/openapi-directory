import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDeviceRequest
/** 
 * Represents a request to the get device request.
**/
export class GetDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
