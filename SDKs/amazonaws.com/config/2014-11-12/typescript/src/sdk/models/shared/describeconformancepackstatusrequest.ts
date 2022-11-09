import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConformancePackStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackNames" })
  conformancePackNames?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
