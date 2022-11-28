import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackStatusDetail } from "./conformancepackstatusdetail";



export class DescribeConformancePackStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackStatusDetails", elemType: ConformancePackStatusDetail })
  conformancePackStatusDetails?: ConformancePackStatusDetail[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
