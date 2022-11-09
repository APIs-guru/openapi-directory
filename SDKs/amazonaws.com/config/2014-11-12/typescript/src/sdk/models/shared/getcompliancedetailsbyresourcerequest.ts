import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";


// GetComplianceDetailsByResourceRequest
/** 
 * <p/>
**/
export class GetComplianceDetailsByResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceTypes" })
  complianceTypes?: ComplianceTypeEnum[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: string;
}
