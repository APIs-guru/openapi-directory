import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NonCompliantResource } from "./noncompliantresource";
import { RelatedResource } from "./relatedresource";
import { AuditFindingSeverityEnum } from "./auditfindingseverityenum";


// AuditFinding
/** 
 * The findings (results) of the audit.
**/
export class AuditFinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkName" })
  checkName?: string;

  @Metadata({ data: "json, name=findingId" })
  findingId?: string;

  @Metadata({ data: "json, name=findingTime" })
  findingTime?: Date;

  @Metadata({ data: "json, name=isSuppressed" })
  isSuppressed?: boolean;

  @Metadata({ data: "json, name=nonCompliantResource" })
  nonCompliantResource?: NonCompliantResource;

  @Metadata({ data: "json, name=reasonForNonCompliance" })
  reasonForNonCompliance?: string;

  @Metadata({ data: "json, name=reasonForNonComplianceCode" })
  reasonForNonComplianceCode?: string;

  @Metadata({ data: "json, name=relatedResources", elemType: shared.RelatedResource })
  relatedResources?: RelatedResource[];

  @Metadata({ data: "json, name=severity" })
  severity?: AuditFindingSeverityEnum;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=taskStartTime" })
  taskStartTime?: Date;
}
