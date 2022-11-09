import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimplifiedApplication } from "./simplifiedapplication";


export class DescribeReleaseLabelOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Applications", elemType: shared.SimplifiedApplication })
  applications?: SimplifiedApplication[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ReleaseLabel" })
  releaseLabel?: string;
}
