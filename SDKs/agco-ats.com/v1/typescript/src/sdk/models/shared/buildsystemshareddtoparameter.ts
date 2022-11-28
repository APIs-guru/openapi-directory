import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BuildSystemSharedDtoParameterDirectionEnum {
    Input = "Input",
    Output = "Output"
}

export enum BuildSystemSharedDtoParameterTypeEnum {
    String = "String",
    Boolean = "Boolean",
    Integer = "Integer",
    Float = "Float",
    StringDictionary = "StringDictionary"
}


// BuildSystemSharedDtoParameter
/** 
 * A DTO for an IParameter
**/
export class BuildSystemSharedDtoParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Direction" })
  direction?: BuildSystemSharedDtoParameterDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: BuildSystemSharedDtoParameterTypeEnum;
}
