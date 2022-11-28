import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdTypeEnum } from "./resourceidtypeenum";
import { ResourceEnum } from "./resourceenum";



// ResourceIdPreference
/** 
 * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
**/
export class ResourceIdPreference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceIdType" })
  resourceIdType?: ResourceIdTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Resources" })
  resources?: ResourceEnum[];
}
