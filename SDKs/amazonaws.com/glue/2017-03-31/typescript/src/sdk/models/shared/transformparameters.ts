import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindMatchesParameters } from "./findmatchesparameters";
import { TransformTypeEnum } from "./transformtypeenum";



// TransformParameters
/** 
 * The algorithm-specific parameters that are associated with the machine learning transform.
**/
export class TransformParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FindMatchesParameters" })
  findMatchesParameters?: FindMatchesParameters;

  @SpeakeasyMetadata({ data: "json, name=TransformType" })
  transformType: TransformTypeEnum;
}
