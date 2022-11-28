import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BuildSystemSharedDtoParameterMappingSourceTypeEnum {
    Constant = "Constant",
    Variable = "Variable"
}
/**
 * A DTO for an IParameterMapping
**/
export declare class BuildSystemSharedDtoParameterMapping extends SpeakeasyBase {
    name?: string;
    source?: string;
    sourceType?: BuildSystemSharedDtoParameterMappingSourceTypeEnum;
}
