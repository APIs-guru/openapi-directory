import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";


// ConformancePackEvaluationFilters
/** 
 * Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.
**/
export class ConformancePackEvaluationFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @Metadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];

  @Metadata({ data: "json, name=ResourceIds" })
  resourceIds?: string[];

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
