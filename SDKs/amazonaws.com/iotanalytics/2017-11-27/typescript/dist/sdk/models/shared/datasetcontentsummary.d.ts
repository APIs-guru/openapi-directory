import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetContentStatus } from "./datasetcontentstatus";
/**
 * Summary information about dataset contents.
**/
export declare class DatasetContentSummary extends SpeakeasyBase {
    completionTime?: Date;
    creationTime?: Date;
    scheduleTime?: Date;
    status?: DatasetContentStatus;
    version?: string;
}
