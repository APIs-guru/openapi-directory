import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceSummary } from "./conformancepackcompliancesummary";



export class GetConformancePackComplianceSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackComplianceSummaryList", elemType: ConformancePackComplianceSummary })
  conformancePackComplianceSummaryList?: ConformancePackComplianceSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
