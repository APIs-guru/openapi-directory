import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BuildSystemSharedDtoParameterDirectionEnum {
    Input = "Input"
,    Output = "Output"
}

export enum BuildSystemSharedDtoParameterTypeEnum {
    String = "String"
,    Boolean = "Boolean"
,    Integer = "Integer"
,    Float = "Float"
,    StringDictionary = "StringDictionary"
}


// BuildSystemSharedDtoParameter
/** 
 * A DTO for an IParameter
**/
export class BuildSystemSharedDtoParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Direction" })
  direction?: BuildSystemSharedDtoParameterDirectionEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: BuildSystemSharedDtoParameterTypeEnum;
}
