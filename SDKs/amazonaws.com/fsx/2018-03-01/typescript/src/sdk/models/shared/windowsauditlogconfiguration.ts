import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WindowsAccessAuditLogLevelEnum } from "./windowsaccessauditloglevelenum";
import { WindowsAccessAuditLogLevelEnum } from "./windowsaccessauditloglevelenum";


// WindowsAuditLogConfiguration
/** 
 * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html"> File access auditing</a>.
**/
export class WindowsAuditLogConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditLogDestination" })
  auditLogDestination?: string;

  @Metadata({ data: "json, name=FileAccessAuditLogLevel" })
  fileAccessAuditLogLevel: WindowsAccessAuditLogLevelEnum;

  @Metadata({ data: "json, name=FileShareAccessAuditLogLevel" })
  fileShareAccessAuditLogLevel: WindowsAccessAuditLogLevelEnum;
}
