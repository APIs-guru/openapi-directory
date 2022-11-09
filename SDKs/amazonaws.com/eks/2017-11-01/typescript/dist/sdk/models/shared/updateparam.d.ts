import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateParamTypeEnum } from "./updateparamtypeenum";
/**
 * An object representing the details of an update request.
**/
export declare class UpdateParam extends SpeakeasyBase {
    type?: UpdateParamTypeEnum;
    value?: string;
}
