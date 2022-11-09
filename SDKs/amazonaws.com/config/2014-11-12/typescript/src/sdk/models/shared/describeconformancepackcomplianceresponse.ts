import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConformancePackRuleCompliance } from "./conformancepackrulecompliance";


export class DescribeConformancePackComplianceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @Metadata({ data: "json, name=ConformancePackRuleComplianceList", elemType: shared.ConformancePackRuleCompliance })
  conformancePackRuleComplianceList: ConformancePackRuleCompliance[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
