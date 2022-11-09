import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Notification } from "./notification";
export declare class ListNotificationsResponse extends SpeakeasyBase {
    nextToken?: string;
    notifications?: Notification[];
}
