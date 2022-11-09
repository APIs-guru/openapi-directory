import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateParamTypeEnum } from "./updateparamtypeenum";


// UpdateParam
/** 
 * An object representing the details of an update request.
**/
export class UpdateParam extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: UpdateParamTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
