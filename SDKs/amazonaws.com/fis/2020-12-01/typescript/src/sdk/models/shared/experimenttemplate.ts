import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateAction } from "./experimenttemplateaction";
import { ExperimentTemplateStopCondition } from "./experimenttemplatestopcondition";
import { ExperimentTemplateTarget } from "./experimenttemplatetarget";



// ExperimentTemplate
/** 
 * Describes an experiment template.
**/
export class ExperimentTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: ExperimentTemplateAction })
  actions?: Map<string, ExperimentTemplateAction>;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=stopConditions", elemType: ExperimentTemplateStopCondition })
  stopConditions?: ExperimentTemplateStopCondition[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: ExperimentTemplateTarget })
  targets?: Map<string, ExperimentTemplateTarget>;
}
