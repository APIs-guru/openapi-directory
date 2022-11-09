import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuildSystemSharedDtoStepConfiguration
/** 
 * Step Configuration
**/
export class BuildSystemSharedDtoStepConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configurations" })
  configurations?: string[];

  @Metadata({ data: "json, name=StepImplementationID" })
  stepImplementationId: string;
}
