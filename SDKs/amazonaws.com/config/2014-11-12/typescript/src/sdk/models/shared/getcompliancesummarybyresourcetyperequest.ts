import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetComplianceSummaryByResourceTypeRequest
/** 
 * <p/>
**/
export class GetComplianceSummaryByResourceTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceTypes" })
  resourceTypes?: string[];
}
