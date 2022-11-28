import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";



// DescribeProfilingGroupResponse
/** 
 * The structure representing the describeProfilingGroupResponse.
**/
export class DescribeProfilingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profilingGroup" })
  profilingGroup: ProfilingGroupDescription;
}
