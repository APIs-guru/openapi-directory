import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BuildSystemSharedDtoParameterValueDirectionEnum {
    Input = "Input",
    Output = "Output"
}
/**
 * A DTO for an IParameterValue
**/
export declare class BuildSystemSharedDtoParameterValue extends SpeakeasyBase {
    direction?: BuildSystemSharedDtoParameterValueDirectionEnum;
    name?: string;
    value?: string;
}
