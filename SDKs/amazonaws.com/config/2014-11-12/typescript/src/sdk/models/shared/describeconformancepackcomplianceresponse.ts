import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackRuleCompliance } from "./conformancepackrulecompliance";



export class DescribeConformancePackComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackRuleComplianceList", elemType: ConformancePackRuleCompliance })
  conformancePackRuleComplianceList: ConformancePackRuleCompliance[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
