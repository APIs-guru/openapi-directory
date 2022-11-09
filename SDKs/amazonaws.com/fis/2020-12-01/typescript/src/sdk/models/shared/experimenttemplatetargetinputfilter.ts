import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentTemplateTargetInputFilter
/** 
 * Describes a filter used for the target resource input in an experiment template.
**/
export class ExperimentTemplateTargetInputFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
