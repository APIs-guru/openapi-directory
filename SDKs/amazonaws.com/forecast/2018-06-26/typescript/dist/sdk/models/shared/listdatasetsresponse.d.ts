import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetSummary } from "./datasetsummary";
export declare class ListDatasetsResponse extends SpeakeasyBase {
    datasets?: DatasetSummary[];
    nextToken?: string;
}
