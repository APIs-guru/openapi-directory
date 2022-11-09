import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExperimentAction } from "./experimentaction";
import { ExperimentState } from "./experimentstate";
import { ExperimentStopCondition } from "./experimentstopcondition";
import { ExperimentTarget } from "./experimenttarget";


// Experiment
/** 
 * Describes an experiment.
**/
export class Experiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.ExperimentAction })
  actions?: Map<string, ExperimentAction>;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=experimentTemplateId" })
  experimentTemplateId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=state" })
  state?: ExperimentState;

  @Metadata({ data: "json, name=stopConditions", elemType: shared.ExperimentStopCondition })
  stopConditions?: ExperimentStopCondition[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targets", elemType: shared.ExperimentTarget })
  targets?: Map<string, ExperimentTarget>;
}
