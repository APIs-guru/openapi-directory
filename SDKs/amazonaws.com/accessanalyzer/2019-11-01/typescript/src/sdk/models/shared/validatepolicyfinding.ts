import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidatePolicyFindingTypeEnum } from "./validatepolicyfindingtypeenum";
import { Location } from "./location";


// ValidatePolicyFinding
/** 
 * A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.
**/
export class ValidatePolicyFinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingDetails" })
  findingDetails: string;

  @Metadata({ data: "json, name=findingType" })
  findingType: ValidatePolicyFindingTypeEnum;

  @Metadata({ data: "json, name=issueCode" })
  issueCode: string;

  @Metadata({ data: "json, name=learnMoreLink" })
  learnMoreLink: string;

  @Metadata({ data: "json, name=locations", elemType: shared.Location })
  locations: Location[];
}
