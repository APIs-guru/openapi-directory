import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditCheckRunStatusEnum } from "./auditcheckrunstatusenum";


// AuditCheckDetails
/** 
 * Information about the audit check.
**/
export class AuditCheckDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkCompliant" })
  checkCompliant?: boolean;

  @Metadata({ data: "json, name=checkRunStatus" })
  checkRunStatus?: AuditCheckRunStatusEnum;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=nonCompliantResourcesCount" })
  nonCompliantResourcesCount?: number;

  @Metadata({ data: "json, name=suppressedNonCompliantResourcesCount" })
  suppressedNonCompliantResourcesCount?: number;

  @Metadata({ data: "json, name=totalResourcesCount" })
  totalResourcesCount?: number;
}
