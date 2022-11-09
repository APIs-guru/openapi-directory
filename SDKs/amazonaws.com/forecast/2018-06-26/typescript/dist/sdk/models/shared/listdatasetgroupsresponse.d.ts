import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetGroupSummary } from "./datasetgroupsummary";
export declare class ListDatasetGroupsResponse extends SpeakeasyBase {
    datasetGroups?: DatasetGroupSummary[];
    nextToken?: string;
}
