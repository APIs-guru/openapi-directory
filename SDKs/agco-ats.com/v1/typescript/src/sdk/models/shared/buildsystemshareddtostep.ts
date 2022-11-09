import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";


// BuildSystemSharedDtoStep
/** 
 * Step
**/
export class BuildSystemSharedDtoStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRequired" })
  configRequired: boolean;

  @Metadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ImplementationID" })
  implementationId: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Parameters", elemType: shared.BuildSystemSharedDtoParameter })
  parameters?: BuildSystemSharedDtoParameter[];

  @Metadata({ data: "json, name=StepID" })
  stepId?: number;
}
