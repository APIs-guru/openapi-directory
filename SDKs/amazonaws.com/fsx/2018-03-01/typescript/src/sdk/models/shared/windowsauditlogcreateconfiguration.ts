import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WindowsAccessAuditLogLevelEnum } from "./windowsaccessauditloglevelenum";



// WindowsAuditLogCreateConfiguration
/** 
 * The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system.
**/
export class WindowsAuditLogCreateConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuditLogDestination" })
  auditLogDestination?: string;

  @SpeakeasyMetadata({ data: "json, name=FileAccessAuditLogLevel" })
  fileAccessAuditLogLevel: WindowsAccessAuditLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=FileShareAccessAuditLogLevel" })
  fileShareAccessAuditLogLevel: WindowsAccessAuditLogLevelEnum;
}
