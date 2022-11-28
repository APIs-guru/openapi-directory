import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";



// UpdateProfilingGroupResponse
/** 
 * The structure representing the updateProfilingGroupResponse.
**/
export class UpdateProfilingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profilingGroup" })
  profilingGroup: ProfilingGroupDescription;
}
