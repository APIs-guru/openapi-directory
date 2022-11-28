import { SpeakeasyBase } from "../../../internal/utils";
import { BehaviorOnMxFailureEnum } from "./behavioronmxfailureenum";
import { CustomMailFromStatusEnum } from "./custommailfromstatusenum";
/**
 * Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).
**/
export declare class IdentityMailFromDomainAttributes extends SpeakeasyBase {
    behaviorOnMxFailure: BehaviorOnMxFailureEnum;
    mailFromDomain: string;
    mailFromDomainStatus: CustomMailFromStatusEnum;
}
