import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetTrailStatusRequest
/** 
 * The name of a trail about which you want the current status.
**/
export class GetTrailStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
