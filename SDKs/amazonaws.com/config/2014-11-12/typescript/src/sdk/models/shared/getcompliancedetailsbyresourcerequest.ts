import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";



// GetComplianceDetailsByResourceRequest
/** 
 * <p/>
**/
export class GetComplianceDetailsByResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceTypes" })
  complianceTypes?: ComplianceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;
}
