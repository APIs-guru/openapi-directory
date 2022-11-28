import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";



// ListProfilingGroupsResponse
/** 
 * The structure representing the listProfilingGroupsResponse.
**/
export class ListProfilingGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=profilingGroupNames" })
  profilingGroupNames: string[];

  @SpeakeasyMetadata({ data: "json, name=profilingGroups", elemType: ProfilingGroupDescription })
  profilingGroups?: ProfilingGroupDescription[];
}
