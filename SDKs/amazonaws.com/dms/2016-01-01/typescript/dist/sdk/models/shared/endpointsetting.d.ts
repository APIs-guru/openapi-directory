import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointSettingTypeValueEnum } from "./endpointsettingtypevalueenum";
/**
 * Endpoint settings.
**/
export declare class EndpointSetting extends SpeakeasyBase {
    applicability?: string;
    defaultValue?: string;
    enumValues?: string[];
    intValueMax?: number;
    intValueMin?: number;
    name?: string;
    sensitive?: boolean;
    type?: EndpointSettingTypeValueEnum;
    units?: string;
}
