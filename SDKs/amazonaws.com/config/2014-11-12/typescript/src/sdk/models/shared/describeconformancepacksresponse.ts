import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackDetail } from "./conformancepackdetail";



export class DescribeConformancePacksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackDetails", elemType: ConformancePackDetail })
  conformancePackDetails?: ConformancePackDetail[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
