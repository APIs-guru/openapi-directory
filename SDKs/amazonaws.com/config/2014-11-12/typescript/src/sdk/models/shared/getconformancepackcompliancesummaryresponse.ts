import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConformancePackComplianceSummary } from "./conformancepackcompliancesummary";


export class GetConformancePackComplianceSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackComplianceSummaryList", elemType: shared.ConformancePackComplianceSummary })
  conformancePackComplianceSummaryList?: ConformancePackComplianceSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
