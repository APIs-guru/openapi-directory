import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BuildSystemSharedDtoParameterMappingSourceTypeEnum {
    Constant = "Constant",
    Variable = "Variable"
}


// BuildSystemSharedDtoParameterMapping
/** 
 * A DTO for an IParameterMapping
**/
export class BuildSystemSharedDtoParameterMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: BuildSystemSharedDtoParameterMappingSourceTypeEnum;
}
