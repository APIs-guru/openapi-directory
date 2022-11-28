import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
import { ResourceTypeEnum } from "./resourcetypeenum";



// RelatedResource
/** 
 * Information about a related resource.
**/
export class RelatedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInfo" })
  additionalInfo?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier?: ResourceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
