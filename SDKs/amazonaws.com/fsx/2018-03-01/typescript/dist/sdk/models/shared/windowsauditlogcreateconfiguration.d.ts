import { SpeakeasyBase } from "../../../internal/utils";
import { WindowsAccessAuditLogLevelEnum } from "./windowsaccessauditloglevelenum";
/**
 * The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system.
**/
export declare class WindowsAuditLogCreateConfiguration extends SpeakeasyBase {
    auditLogDestination?: string;
    fileAccessAuditLogLevel: WindowsAccessAuditLogLevelEnum;
    fileShareAccessAuditLogLevel: WindowsAccessAuditLogLevelEnum;
}
