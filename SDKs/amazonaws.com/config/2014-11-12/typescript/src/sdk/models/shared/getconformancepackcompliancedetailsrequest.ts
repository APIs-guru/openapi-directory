import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackEvaluationFilters } from "./conformancepackevaluationfilters";



export class GetConformancePackComplianceDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: ConformancePackEvaluationFilters;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
