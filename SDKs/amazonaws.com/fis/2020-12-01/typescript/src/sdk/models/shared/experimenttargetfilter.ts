import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentTargetFilter
/** 
 * Describes a filter used for the target resources in an experiment.
**/
export class ExperimentTargetFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
