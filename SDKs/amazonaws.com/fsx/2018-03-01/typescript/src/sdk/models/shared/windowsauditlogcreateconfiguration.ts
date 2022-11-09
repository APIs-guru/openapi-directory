import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WindowsAccessAuditLogLevelEnum } from "./windowsaccessauditloglevelenum";
import { WindowsAccessAuditLogLevelEnum } from "./windowsaccessauditloglevelenum";


// WindowsAuditLogCreateConfiguration
/** 
 * The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system.
**/
export class WindowsAuditLogCreateConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditLogDestination" })
  auditLogDestination?: string;

  @Metadata({ data: "json, name=FileAccessAuditLogLevel" })
  fileAccessAuditLogLevel: WindowsAccessAuditLogLevelEnum;

  @Metadata({ data: "json, name=FileShareAccessAuditLogLevel" })
  fileShareAccessAuditLogLevel: WindowsAccessAuditLogLevelEnum;
}
