import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConformancePackStatusDetail } from "./conformancepackstatusdetail";


export class DescribeConformancePackStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackStatusDetails", elemType: shared.ConformancePackStatusDetail })
  conformancePackStatusDetails?: ConformancePackStatusDetail[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
