import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";


// DescribeProfilingGroupResponse
/** 
 * The structure representing the describeProfilingGroupResponse.
**/
export class DescribeProfilingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=profilingGroup" })
  profilingGroup: ProfilingGroupDescription;
}
