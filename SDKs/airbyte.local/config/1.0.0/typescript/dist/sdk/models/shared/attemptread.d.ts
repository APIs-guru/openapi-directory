import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AttemptStatusEnum } from "./attemptstatusenum";
export declare class AttemptRead extends SpeakeasyBase {
    bytesSynced?: number;
    createdAt: number;
    endedAt?: number;
    id: number;
    recordsSynced?: number;
    status: AttemptStatusEnum;
    updatedAt: number;
}
