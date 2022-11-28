import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateParamTypeEnum } from "./updateparamtypeenum";



// UpdateParam
/** 
 * An object representing the details of an update request.
**/
export class UpdateParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateParamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
