import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";



// GetComplianceDetailsByConfigRuleRequest
/** 
 * <p/>
**/
export class GetComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceTypes" })
  complianceTypes?: ComplianceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
