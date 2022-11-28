import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BuildSystemSharedDtoParameterDirectionEnum {
    Input = "Input",
    Output = "Output"
}
export declare enum BuildSystemSharedDtoParameterTypeEnum {
    String = "String",
    Boolean = "Boolean",
    Integer = "Integer",
    Float = "Float",
    StringDictionary = "StringDictionary"
}
/**
 * A DTO for an IParameter
**/
export declare class BuildSystemSharedDtoParameter extends SpeakeasyBase {
    direction?: BuildSystemSharedDtoParameterDirectionEnum;
    name?: string;
    type?: BuildSystemSharedDtoParameterTypeEnum;
}
