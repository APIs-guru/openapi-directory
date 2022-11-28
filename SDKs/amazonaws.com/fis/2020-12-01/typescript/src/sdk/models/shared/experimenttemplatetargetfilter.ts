import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentTemplateTargetFilter
/** 
 * Describes a filter used for the target resources in an experiment template.
**/
export class ExperimentTemplateTargetFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
