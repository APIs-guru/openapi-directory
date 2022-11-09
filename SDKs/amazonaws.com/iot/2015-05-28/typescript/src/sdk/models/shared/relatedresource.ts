import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceIdentifier } from "./resourceidentifier";
import { ResourceTypeEnum } from "./resourcetypeenum";


// RelatedResource
/** 
 * Information about a related resource.
**/
export class RelatedResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInfo" })
  additionalInfo?: Map<string, string>;

  @Metadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier?: ResourceIdentifier;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
