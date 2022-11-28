import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// Relationship
/** 
 * The relationship of the related resource to the main resource.
**/
export class Relationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationshipName" })
  relationshipName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
