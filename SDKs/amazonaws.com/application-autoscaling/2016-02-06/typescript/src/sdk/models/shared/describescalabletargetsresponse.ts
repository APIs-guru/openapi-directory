import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScalableTarget } from "./scalabletarget";


export class DescribeScalableTargetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScalableTargets", elemType: shared.ScalableTarget })
  scalableTargets?: ScalableTarget[];
}
