import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildSystemSharedDtoStepConfiguration
/** 
 * Step Configuration
**/
export class BuildSystemSharedDtoStepConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configurations" })
  configurations?: string[];

  @SpeakeasyMetadata({ data: "json, name=StepImplementationID" })
  stepImplementationId: string;
}
