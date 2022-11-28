import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetComplianceSummaryByResourceTypeRequest
/** 
 * <p/>
**/
export class GetComplianceSummaryByResourceTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceTypes" })
  resourceTypes?: string[];
}
