import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";



// DescribeComplianceByResourceRequest
/** 
 * <p/>
**/
export class DescribeComplianceByResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceTypes" })
  complianceTypes?: ComplianceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
