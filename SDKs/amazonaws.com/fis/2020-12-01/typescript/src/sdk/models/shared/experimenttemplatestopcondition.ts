import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentTemplateStopCondition
/** 
 * Describes a stop condition for an experiment template.
**/
export class ExperimentTemplateStopCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
