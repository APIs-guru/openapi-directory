import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetEntry } from "./datasetentry";
import { DatasetContentStatus } from "./datasetcontentstatus";
export declare class GetDatasetContentResponse extends SpeakeasyBase {
    entries?: DatasetEntry[];
    status?: DatasetContentStatus;
    timestamp?: Date;
}
