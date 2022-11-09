import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackEvaluationFilters } from "./conformancepackevaluationfilters";


export class GetConformancePackComplianceDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: ConformancePackEvaluationFilters;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
