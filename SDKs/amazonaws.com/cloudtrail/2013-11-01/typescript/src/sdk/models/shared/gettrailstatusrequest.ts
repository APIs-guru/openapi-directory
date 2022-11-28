import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetTrailStatusRequest
/** 
 * The name of a trail about which you want the current status.
**/
export class GetTrailStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
