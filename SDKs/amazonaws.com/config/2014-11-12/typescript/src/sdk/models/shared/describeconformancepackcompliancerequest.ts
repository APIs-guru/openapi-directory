import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackComplianceFilters } from "./conformancepackcompliancefilters";


export class DescribeConformancePackComplianceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: ConformancePackComplianceFilters;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
