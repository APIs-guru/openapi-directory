import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentTemplateTargetInputFilter
/** 
 * Describes a filter used for the target resource input in an experiment template.
**/
export class ExperimentTemplateTargetInputFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
