import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScaleUnitEnum } from "./scaleunitenum";


// Scale
/** 
 * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
**/
export class Scale extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit?: ScaleUnitEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
