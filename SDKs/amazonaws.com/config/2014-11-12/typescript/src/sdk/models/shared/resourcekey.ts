import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ResourceKey
/** 
 * The details that identify a resource within Config, including the resource type and resource ID.
**/
export class ResourceKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
