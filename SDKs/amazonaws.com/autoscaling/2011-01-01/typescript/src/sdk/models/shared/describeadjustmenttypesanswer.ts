import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdjustmentType } from "./adjustmenttype";



export class DescribeAdjustmentTypesAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AdjustmentType })
  adjustmentTypes?: AdjustmentType[];
}
