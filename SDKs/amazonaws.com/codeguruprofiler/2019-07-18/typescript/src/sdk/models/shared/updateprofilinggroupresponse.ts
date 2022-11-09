import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";


// UpdateProfilingGroupResponse
/** 
 * The structure representing the updateProfilingGroupResponse.
**/
export class UpdateProfilingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=profilingGroup" })
  profilingGroup: ProfilingGroupDescription;
}
