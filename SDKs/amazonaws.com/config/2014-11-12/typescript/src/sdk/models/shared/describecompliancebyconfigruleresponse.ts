import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceByConfigRule } from "./compliancebyconfigrule";



// DescribeComplianceByConfigRuleResponse
/** 
 * <p/>
**/
export class DescribeComplianceByConfigRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceByConfigRules", elemType: ComplianceByConfigRule })
  complianceByConfigRules?: ComplianceByConfigRule[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
