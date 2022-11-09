import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditCheckConfiguration } from "./auditcheckconfiguration";
import { AuditNotificationTarget } from "./auditnotificationtarget";


export class DescribeAccountAuditConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditCheckConfigurations", elemType: shared.AuditCheckConfiguration })
  auditCheckConfigurations?: Map<string, AuditCheckConfiguration>;

  @Metadata({ data: "json, name=auditNotificationTargetConfigurations", elemType: shared.AuditNotificationTarget })
  auditNotificationTargetConfigurations?: Map<string, AuditNotificationTarget>;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
