import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetGroupSummary } from "./datasetgroupsummary";
export declare class ListDatasetGroupsResponse extends SpeakeasyBase {
    datasetGroups?: DatasetGroupSummary[];
    nextToken?: string;
}
