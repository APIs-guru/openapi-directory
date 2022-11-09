import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ResourceUri
/** 
 * The URIs for function resources.
**/
export class ResourceUri extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=Uri" })
  uri?: string;
}
