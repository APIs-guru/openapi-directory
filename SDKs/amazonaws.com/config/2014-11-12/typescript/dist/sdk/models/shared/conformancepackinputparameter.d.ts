import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
**/
export declare class ConformancePackInputParameter extends SpeakeasyBase {
    parameterName: string;
    parameterValue: string;
}
