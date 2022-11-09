import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainValidation } from "./domainvalidation";
import { RenewalStatusEnum } from "./renewalstatusenum";
import { FailureReasonEnum } from "./failurereasonenum";


// RenewalSummary
/** 
 * Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
**/
export class RenewalSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainValidationOptions", elemType: shared.DomainValidation })
  domainValidationOptions: DomainValidation[];

  @Metadata({ data: "json, name=RenewalStatus" })
  renewalStatus: RenewalStatusEnum;

  @Metadata({ data: "json, name=RenewalStatusReason" })
  renewalStatusReason?: FailureReasonEnum;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt: Date;
}
