import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceByConfigRule } from "./compliancebyconfigrule";


// DescribeComplianceByConfigRuleResponse
/** 
 * <p/>
**/
export class DescribeComplianceByConfigRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceByConfigRules", elemType: shared.ComplianceByConfigRule })
  complianceByConfigRules?: ComplianceByConfigRule[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
