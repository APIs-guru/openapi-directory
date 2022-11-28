import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";



// DescribeComplianceByConfigRuleRequest
/** 
 * <p/>
**/
export class DescribeComplianceByConfigRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceTypes" })
  complianceTypes?: ComplianceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
