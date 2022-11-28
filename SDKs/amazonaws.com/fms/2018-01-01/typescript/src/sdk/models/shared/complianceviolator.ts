import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ViolationReasonEnum } from "./violationreasonenum";



// ComplianceViolator
/** 
 * Details of the resource that is not protected by the policy.
**/
export class ComplianceViolator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolationReason" })
  violationReason?: ViolationReasonEnum;
}
