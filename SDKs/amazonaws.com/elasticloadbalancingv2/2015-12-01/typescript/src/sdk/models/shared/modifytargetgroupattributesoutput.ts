import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetGroupAttribute } from "./targetgroupattribute";



export class ModifyTargetGroupAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TargetGroupAttribute })
  attributes?: TargetGroupAttribute[];
}
