import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExperimentTemplateAction } from "./experimenttemplateaction";
import { ExperimentTemplateStopCondition } from "./experimenttemplatestopcondition";
import { ExperimentTemplateTarget } from "./experimenttemplatetarget";


// ExperimentTemplate
/** 
 * Describes an experiment template.
**/
export class ExperimentTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.ExperimentTemplateAction })
  actions?: Map<string, ExperimentTemplateAction>;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=stopConditions", elemType: shared.ExperimentTemplateStopCondition })
  stopConditions?: ExperimentTemplateStopCondition[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targets", elemType: shared.ExperimentTemplateTarget })
  targets?: Map<string, ExperimentTemplateTarget>;
}
