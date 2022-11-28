import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdTypeEnum } from "./resourceidtypeenum";
import { ResourceEnum } from "./resourceenum";
/**
 * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
**/
export declare class ResourceIdPreference extends SpeakeasyBase {
    resourceIdType?: ResourceIdTypeEnum;
    resources?: ResourceEnum[];
}
