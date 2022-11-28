import { SpeakeasyBase } from "../../../internal/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";
/**
 * The structure representing the listProfilingGroupsResponse.
**/
export declare class ListProfilingGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    profilingGroupNames: string[];
    profilingGroups?: ProfilingGroupDescription[];
}
