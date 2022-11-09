import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ViolationReasonEnum } from "./violationreasonenum";


// ComplianceViolator
/** 
 * Details of the resource that is not protected by the policy.
**/
export class ComplianceViolator extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=ViolationReason" })
  violationReason?: ViolationReasonEnum;
}
