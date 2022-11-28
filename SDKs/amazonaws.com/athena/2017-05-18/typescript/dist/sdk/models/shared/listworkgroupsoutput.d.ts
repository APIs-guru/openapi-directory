import { SpeakeasyBase } from "../../../internal/utils";
import { WorkGroupSummary } from "./workgroupsummary";
export declare class ListWorkGroupsOutput extends SpeakeasyBase {
    nextToken?: string;
    workGroups?: WorkGroupSummary[];
}
