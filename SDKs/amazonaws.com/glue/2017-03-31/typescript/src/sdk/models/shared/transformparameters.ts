import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindMatchesParameters } from "./findmatchesparameters";
import { TransformTypeEnum } from "./transformtypeenum";


// TransformParameters
/** 
 * The algorithm-specific parameters that are associated with the machine learning transform.
**/
export class TransformParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FindMatchesParameters" })
  findMatchesParameters?: FindMatchesParameters;

  @Metadata({ data: "json, name=TransformType" })
  transformType: TransformTypeEnum;
}
