import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NonCompliantResource } from "./noncompliantresource";
import { RelatedResource } from "./relatedresource";
import { AuditFindingSeverityEnum } from "./auditfindingseverityenum";



// AuditFinding
/** 
 * The findings (results) of the audit.
**/
export class AuditFinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkName" })
  checkName?: string;

  @SpeakeasyMetadata({ data: "json, name=findingId" })
  findingId?: string;

  @SpeakeasyMetadata({ data: "json, name=findingTime" })
  findingTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=isSuppressed" })
  isSuppressed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nonCompliantResource" })
  nonCompliantResource?: NonCompliantResource;

  @SpeakeasyMetadata({ data: "json, name=reasonForNonCompliance" })
  reasonForNonCompliance?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonForNonComplianceCode" })
  reasonForNonComplianceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedResources", elemType: RelatedResource })
  relatedResources?: RelatedResource[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: AuditFindingSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStartTime" })
  taskStartTime?: Date;
}
