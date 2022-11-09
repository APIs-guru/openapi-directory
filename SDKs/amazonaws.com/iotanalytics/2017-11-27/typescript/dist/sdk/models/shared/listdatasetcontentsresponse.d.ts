import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetContentSummary } from "./datasetcontentsummary";
export declare class ListDatasetContentsResponse extends SpeakeasyBase {
    datasetContentSummaries?: DatasetContentSummary[];
    nextToken?: string;
}
