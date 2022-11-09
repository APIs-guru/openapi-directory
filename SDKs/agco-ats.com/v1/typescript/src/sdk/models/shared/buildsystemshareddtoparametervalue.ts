import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BuildSystemSharedDtoParameterValueDirectionEnum {
    Input = "Input"
,    Output = "Output"
}


// BuildSystemSharedDtoParameterValue
/** 
 * A DTO for an IParameterValue
**/
export class BuildSystemSharedDtoParameterValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Direction" })
  direction?: BuildSystemSharedDtoParameterValueDirectionEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
