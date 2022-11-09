import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// Relationship
/** 
 * The relationship of the related resource to the main resource.
**/
export class Relationship extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationshipName" })
  relationshipName?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
