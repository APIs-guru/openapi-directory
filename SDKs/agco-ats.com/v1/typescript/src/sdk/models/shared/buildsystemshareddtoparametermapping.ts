import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BuildSystemSharedDtoParameterMappingSourceTypeEnum {
    Constant = "Constant"
,    Variable = "Variable"
}


// BuildSystemSharedDtoParameterMapping
/** 
 * A DTO for an IParameterMapping
**/
export class BuildSystemSharedDtoParameterMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: BuildSystemSharedDtoParameterMappingSourceTypeEnum;
}
