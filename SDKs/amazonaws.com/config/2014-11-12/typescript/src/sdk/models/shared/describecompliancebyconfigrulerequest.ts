import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";


// DescribeComplianceByConfigRuleRequest
/** 
 * <p/>
**/
export class DescribeComplianceByConfigRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceTypes" })
  complianceTypes?: ComplianceTypeEnum[];

  @Metadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
