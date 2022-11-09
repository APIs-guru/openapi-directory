import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidationError } from "./validationerror";
import { ValidationWarning } from "./validationwarning";


// ValidatePipelineDefinitionOutput
/** 
 * Contains the output of ValidatePipelineDefinition.
**/
export class ValidatePipelineDefinitionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=errored" })
  errored: boolean;

  @Metadata({ data: "json, name=validationErrors", elemType: shared.ValidationError })
  validationErrors?: ValidationError[];

  @Metadata({ data: "json, name=validationWarnings", elemType: shared.ValidationWarning })
  validationWarnings?: ValidationWarning[];
}
