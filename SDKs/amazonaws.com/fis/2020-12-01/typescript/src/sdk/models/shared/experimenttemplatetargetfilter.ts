import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentTemplateTargetFilter
/** 
 * Describes a filter used for the target resources in an experiment template.
**/
export class ExperimentTemplateTargetFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
