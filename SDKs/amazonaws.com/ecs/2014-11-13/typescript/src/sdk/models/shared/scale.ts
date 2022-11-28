import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScaleUnitEnum } from "./scaleunitenum";



// Scale
/** 
 * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
**/
export class Scale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: ScaleUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
