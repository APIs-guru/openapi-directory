import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProfilingGroupDescription } from "./profilinggroupdescription";


// ListProfilingGroupsResponse
/** 
 * The structure representing the listProfilingGroupsResponse.
**/
export class ListProfilingGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=profilingGroupNames" })
  profilingGroupNames: string[];

  @Metadata({ data: "json, name=profilingGroups", elemType: shared.ProfilingGroupDescription })
  profilingGroups?: ProfilingGroupDescription[];
}
