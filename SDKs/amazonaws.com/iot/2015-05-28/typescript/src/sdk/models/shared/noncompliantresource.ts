import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
import { ResourceTypeEnum } from "./resourcetypeenum";



// NonCompliantResource
/** 
 * Information about the resource that was noncompliant with the audit check.
**/
export class NonCompliantResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInfo" })
  additionalInfo?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier?: ResourceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
