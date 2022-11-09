import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";


// CreateProfilingGroupResponse
/** 
 * The structure representing the createProfilingGroupResponse.
**/
export class CreateProfilingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=profilingGroup" })
  profilingGroup: ProfilingGroupDescription;
}
