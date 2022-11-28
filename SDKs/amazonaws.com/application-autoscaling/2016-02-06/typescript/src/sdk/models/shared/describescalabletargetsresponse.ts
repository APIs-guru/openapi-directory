import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalableTarget } from "./scalabletarget";



export class DescribeScalableTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalableTargets", elemType: ScalableTarget })
  scalableTargets?: ScalableTarget[];
}
