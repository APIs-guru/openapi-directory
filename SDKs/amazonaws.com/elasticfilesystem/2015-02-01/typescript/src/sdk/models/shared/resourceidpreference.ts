import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceIdTypeEnum } from "./resourceidtypeenum";
import { ResourceEnum } from "./resourceenum";


// ResourceIdPreference
/** 
 * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
**/
export class ResourceIdPreference extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceIdType" })
  resourceIdType?: ResourceIdTypeEnum;

  @Metadata({ data: "json, name=Resources" })
  resources?: ResourceEnum[];
}
