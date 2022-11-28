import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentTargetFilter
/** 
 * Describes a filter used for the target resources in an experiment.
**/
export class ExperimentTargetFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
