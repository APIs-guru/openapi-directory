import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummaryByResourceType } from "./compliancesummarybyresourcetype";



// GetComplianceSummaryByResourceTypeResponse
/** 
 * <p/>
**/
export class GetComplianceSummaryByResourceTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceSummariesByResourceType", elemType: ComplianceSummaryByResourceType })
  complianceSummariesByResourceType?: ComplianceSummaryByResourceType[];
}
