import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BehaviorOnMxFailureEnum } from "./behavioronmxfailureenum";
import { CustomMailFromStatusEnum } from "./custommailfromstatusenum";



// IdentityMailFromDomainAttributes
/** 
 * Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).
**/
export class IdentityMailFromDomainAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  behaviorOnMxFailure: BehaviorOnMxFailureEnum;

  @SpeakeasyMetadata()
  mailFromDomain: string;

  @SpeakeasyMetadata()
  mailFromDomainStatus: CustomMailFromStatusEnum;
}
