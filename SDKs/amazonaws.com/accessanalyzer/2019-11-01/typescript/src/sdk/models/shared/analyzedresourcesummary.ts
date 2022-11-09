import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// AnalyzedResourceSummary
/** 
 * Contains the ARN of the analyzed resource.
**/
export class AnalyzedResourceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=resourceOwnerAccount" })
  resourceOwnerAccount: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
