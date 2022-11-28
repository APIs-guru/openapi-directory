import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainValidation } from "./domainvalidation";
import { RenewalStatusEnum } from "./renewalstatusenum";
import { FailureReasonEnum } from "./failurereasonenum";



// RenewalSummary
/** 
 * Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
**/
export class RenewalSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainValidationOptions", elemType: DomainValidation })
  domainValidationOptions: DomainValidation[];

  @SpeakeasyMetadata({ data: "json, name=RenewalStatus" })
  renewalStatus: RenewalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=RenewalStatusReason" })
  renewalStatusReason?: FailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt: Date;
}
