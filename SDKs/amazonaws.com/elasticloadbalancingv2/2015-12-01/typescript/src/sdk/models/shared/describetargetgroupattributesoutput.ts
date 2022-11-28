import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetGroupAttribute } from "./targetgroupattribute";



export class DescribeTargetGroupAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TargetGroupAttribute })
  attributes?: TargetGroupAttribute[];
}
