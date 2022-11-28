import { SpeakeasyBase } from "../../../internal/utils";
import { DomainValidation } from "./domainvalidation";
import { RenewalStatusEnum } from "./renewalstatusenum";
import { FailureReasonEnum } from "./failurereasonenum";
/**
 * Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
**/
export declare class RenewalSummary extends SpeakeasyBase {
    domainValidationOptions: DomainValidation[];
    renewalStatus: RenewalStatusEnum;
    renewalStatusReason?: FailureReasonEnum;
    updatedAt: Date;
}
