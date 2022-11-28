import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BuildSystemSharedDtoParameterValueDirectionEnum {
    Input = "Input",
    Output = "Output"
}


// BuildSystemSharedDtoParameterValue
/** 
 * A DTO for an IParameterValue
**/
export class BuildSystemSharedDtoParameterValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Direction" })
  direction?: BuildSystemSharedDtoParameterValueDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
