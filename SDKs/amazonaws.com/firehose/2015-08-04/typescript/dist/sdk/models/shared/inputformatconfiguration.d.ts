import { SpeakeasyBase } from "../../../internal/utils";
import { Deserializer } from "./deserializer";
/**
 * Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.
**/
export declare class InputFormatConfiguration extends SpeakeasyBase {
    deserializer?: Deserializer;
}
