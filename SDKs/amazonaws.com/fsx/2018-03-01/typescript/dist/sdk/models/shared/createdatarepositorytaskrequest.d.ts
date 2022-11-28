import { SpeakeasyBase } from "../../../internal/utils";
import { CompletionReport } from "./completionreport";
import { Tag } from "./tag";
import { DataRepositoryTaskTypeEnum } from "./datarepositorytasktypeenum";
export declare class CreateDataRepositoryTaskRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemId: string;
    paths?: string[];
    report: CompletionReport;
    tags?: Tag[];
    type: DataRepositoryTaskTypeEnum;
}
