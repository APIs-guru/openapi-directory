import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}
export declare class NotificationRead extends SpeakeasyBase {
    message?: string;
    status: NotificationReadStatusEnum;
}
