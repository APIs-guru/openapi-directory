import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTaskFailureDetails } from "./datarepositorytaskfailuredetails";
import { DataRepositoryTaskLifecycleEnum } from "./datarepositorytasklifecycleenum";
import { CompletionReport } from "./completionreport";
import { DataRepositoryTaskStatus } from "./datarepositorytaskstatus";
import { Tag } from "./tag";
import { DataRepositoryTaskTypeEnum } from "./datarepositorytasktypeenum";
/**
 * A description of the data repository task. You use data repository tasks to perform bulk transfer operations between your Amazon FSx file system and its linked data repository.
**/
export declare class DataRepositoryTask extends SpeakeasyBase {
    creationTime: Date;
    endTime?: Date;
    failureDetails?: DataRepositoryTaskFailureDetails;
    fileSystemId: string;
    lifecycle: DataRepositoryTaskLifecycleEnum;
    paths?: string[];
    report?: CompletionReport;
    resourceArn?: string;
    startTime?: Date;
    status?: DataRepositoryTaskStatus;
    tags?: Tag[];
    taskId: string;
    type: DataRepositoryTaskTypeEnum;
}
