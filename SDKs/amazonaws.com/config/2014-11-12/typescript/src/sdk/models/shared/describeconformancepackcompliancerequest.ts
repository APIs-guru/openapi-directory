import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceFilters } from "./conformancepackcompliancefilters";



export class DescribeConformancePackComplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: ConformancePackComplianceFilters;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
