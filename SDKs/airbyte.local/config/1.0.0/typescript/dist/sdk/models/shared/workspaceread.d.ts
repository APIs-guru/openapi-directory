import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
export declare class WorkspaceRead extends SpeakeasyBase {
    anonymousDataCollection?: boolean;
    customerId: string;
    displaySetupWizard?: boolean;
    email?: string;
    initialSetupComplete: boolean;
    name: string;
    news?: boolean;
    notifications?: Notification[];
    securityUpdates?: boolean;
    slug: string;
    workspaceId: string;
}
