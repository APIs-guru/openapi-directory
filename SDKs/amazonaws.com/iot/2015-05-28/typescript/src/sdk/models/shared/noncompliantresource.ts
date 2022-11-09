import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceIdentifier } from "./resourceidentifier";
import { ResourceTypeEnum } from "./resourcetypeenum";


// NonCompliantResource
/** 
 * Information about the resource that was noncompliant with the audit check.
**/
export class NonCompliantResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInfo" })
  additionalInfo?: Map<string, string>;

  @Metadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier?: ResourceIdentifier;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
