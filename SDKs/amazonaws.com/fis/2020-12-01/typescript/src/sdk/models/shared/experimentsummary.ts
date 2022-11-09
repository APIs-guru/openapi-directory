import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentState } from "./experimentstate";


// ExperimentSummary
/** 
 * Provides a summary of an experiment.
**/
export class ExperimentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=experimentTemplateId" })
  experimentTemplateId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=state" })
  state?: ExperimentState;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
