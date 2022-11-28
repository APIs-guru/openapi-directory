import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTaskLifecycleEnum } from "./datarepositorytasklifecycleenum";
export declare class CancelDataRepositoryTaskResponse extends SpeakeasyBase {
    lifecycle?: DataRepositoryTaskLifecycleEnum;
    taskId?: string;
}
