import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CheckOperationReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}
export declare class CheckOperationRead extends SpeakeasyBase {
    message?: string;
    status: CheckOperationReadStatusEnum;
}
