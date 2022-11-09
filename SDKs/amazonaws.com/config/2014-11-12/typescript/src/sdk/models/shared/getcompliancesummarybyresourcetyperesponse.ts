import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceSummaryByResourceType } from "./compliancesummarybyresourcetype";


// GetComplianceSummaryByResourceTypeResponse
/** 
 * <p/>
**/
export class GetComplianceSummaryByResourceTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceSummariesByResourceType", elemType: shared.ComplianceSummaryByResourceType })
  complianceSummariesByResourceType?: ComplianceSummaryByResourceType[];
}
