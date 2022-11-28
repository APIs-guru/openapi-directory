import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";



// ConformancePackEvaluationFilters
/** 
 * Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.
**/
export class ConformancePackEvaluationFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: ConformancePackComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourceIds" })
  resourceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
