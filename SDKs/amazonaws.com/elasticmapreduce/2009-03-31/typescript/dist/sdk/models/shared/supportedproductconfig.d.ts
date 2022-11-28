import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The list of supported product configurations that allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.
**/
export declare class SupportedProductConfig extends SpeakeasyBase {
    args?: string[];
    name?: string;
}
