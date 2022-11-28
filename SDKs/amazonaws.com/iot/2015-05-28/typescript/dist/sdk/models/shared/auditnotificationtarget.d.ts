import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the targets to which audit notifications are sent.
**/
export declare class AuditNotificationTarget extends SpeakeasyBase {
    enabled?: boolean;
    roleArn?: string;
    targetArn?: string;
}
