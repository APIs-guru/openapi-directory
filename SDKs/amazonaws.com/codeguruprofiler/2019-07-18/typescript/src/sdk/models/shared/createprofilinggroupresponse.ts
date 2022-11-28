import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";



// CreateProfilingGroupResponse
/** 
 * The structure representing the createProfilingGroupResponse.
**/
export class CreateProfilingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profilingGroup" })
  profilingGroup: ProfilingGroupDescription;
}
