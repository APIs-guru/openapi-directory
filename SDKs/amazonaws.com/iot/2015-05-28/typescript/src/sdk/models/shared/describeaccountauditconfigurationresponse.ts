import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditCheckConfiguration } from "./auditcheckconfiguration";
import { AuditNotificationTarget } from "./auditnotificationtarget";



export class DescribeAccountAuditConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditCheckConfigurations", elemType: AuditCheckConfiguration })
  auditCheckConfigurations?: Map<string, AuditCheckConfiguration>;

  @SpeakeasyMetadata({ data: "json, name=auditNotificationTargetConfigurations", elemType: AuditNotificationTarget })
  auditNotificationTargetConfigurations?: Map<string, AuditNotificationTarget>;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
