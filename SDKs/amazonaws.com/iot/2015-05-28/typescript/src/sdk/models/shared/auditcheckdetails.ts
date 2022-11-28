import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditCheckRunStatusEnum } from "./auditcheckrunstatusenum";



// AuditCheckDetails
/** 
 * Information about the audit check.
**/
export class AuditCheckDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkCompliant" })
  checkCompliant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=checkRunStatus" })
  checkRunStatus?: AuditCheckRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=nonCompliantResourcesCount" })
  nonCompliantResourcesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=suppressedNonCompliantResourcesCount" })
  suppressedNonCompliantResourcesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResourcesCount" })
  totalResourcesCount?: number;
}
