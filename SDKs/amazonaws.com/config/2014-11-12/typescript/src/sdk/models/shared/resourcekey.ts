import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ResourceKey
/** 
 * The details that identify a resource within Config, including the resource type and resource ID.
**/
export class ResourceKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
