import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
export declare class WorkspaceUpdate extends SpeakeasyBase {
    anonymousDataCollection: boolean;
    displaySetupWizard?: boolean;
    email?: string;
    initialSetupComplete: boolean;
    news: boolean;
    notifications?: Notification[];
    securityUpdates: boolean;
    workspaceId: string;
}
