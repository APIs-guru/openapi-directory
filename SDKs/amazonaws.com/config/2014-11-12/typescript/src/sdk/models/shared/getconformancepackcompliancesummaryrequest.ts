import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConformancePackComplianceSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackNames" })
  conformancePackNames: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
