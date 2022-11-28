import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCheckConfiguration } from "./auditcheckconfiguration";
import { AuditNotificationTarget } from "./auditnotificationtarget";
export declare class DescribeAccountAuditConfigurationResponse extends SpeakeasyBase {
    auditCheckConfigurations?: Map<string, AuditCheckConfiguration>;
    auditNotificationTargetConfigurations?: Map<string, AuditNotificationTarget>;
    roleArn?: string;
}
