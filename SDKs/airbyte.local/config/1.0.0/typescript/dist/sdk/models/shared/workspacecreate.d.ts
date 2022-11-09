import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Notification } from "./notification";
export declare class WorkspaceCreate extends SpeakeasyBase {
    anonymousDataCollection?: boolean;
    email?: string;
    name: string;
    news?: boolean;
    notifications?: Notification[];
    securityUpdates?: boolean;
}
