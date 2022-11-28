import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";



// BuildSystemSharedDtoStepInput
/** 
 * Step
**/
export class BuildSystemSharedDtoStepInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRequired, form, name=ConfigRequired;" })
  configRequired: boolean;

  @SpeakeasyMetadata({ data: "json, name=Deleted, form, name=Deleted;" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ImplementationID, form, name=ImplementationID;" })
  implementationId: string;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=StepID, form, name=StepID;" })
  stepId?: number;
}


// BuildSystemSharedDtoStep
/** 
 * Step
**/
export class BuildSystemSharedDtoStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRequired" })
  configRequired: boolean;

  @SpeakeasyMetadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ImplementationID" })
  implementationId: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: BuildSystemSharedDtoParameter })
  parameters?: BuildSystemSharedDtoParameter[];

  @SpeakeasyMetadata({ data: "json, name=StepID" })
  stepId?: number;
}
