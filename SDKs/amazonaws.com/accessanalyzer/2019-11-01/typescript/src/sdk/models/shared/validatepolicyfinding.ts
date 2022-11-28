import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidatePolicyFindingTypeEnum } from "./validatepolicyfindingtypeenum";
import { Location } from "./location";



// ValidatePolicyFinding
/** 
 * A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.
**/
export class ValidatePolicyFinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingDetails" })
  findingDetails: string;

  @SpeakeasyMetadata({ data: "json, name=findingType" })
  findingType: ValidatePolicyFindingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=issueCode" })
  issueCode: string;

  @SpeakeasyMetadata({ data: "json, name=learnMoreLink" })
  learnMoreLink: string;

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations: Location[];
}
