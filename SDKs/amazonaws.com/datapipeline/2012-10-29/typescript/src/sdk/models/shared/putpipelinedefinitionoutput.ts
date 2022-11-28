import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
import { ValidationWarning } from "./validationwarning";



// PutPipelineDefinitionOutput
/** 
 * Contains the output of PutPipelineDefinition.
**/
export class PutPipelineDefinitionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errored" })
  errored: boolean;

  @SpeakeasyMetadata({ data: "json, name=validationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];

  @SpeakeasyMetadata({ data: "json, name=validationWarnings", elemType: ValidationWarning })
  validationWarnings?: ValidationWarning[];
}
