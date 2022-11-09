import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Compliance } from "./compliance";


// ComplianceByConfigRule
/** 
 * Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.
**/
export class ComplianceByConfigRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Compliance" })
  compliance?: Compliance;

  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;
}
