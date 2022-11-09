import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConformancePackDetail } from "./conformancepackdetail";


export class DescribeConformancePacksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackDetails", elemType: shared.ConformancePackDetail })
  conformancePackDetails?: ConformancePackDetail[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
