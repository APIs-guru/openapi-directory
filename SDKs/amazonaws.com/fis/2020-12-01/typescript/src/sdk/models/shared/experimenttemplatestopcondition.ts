import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentTemplateStopCondition
/** 
 * Describes a stop condition for an experiment template.
**/
export class ExperimentTemplateStopCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
