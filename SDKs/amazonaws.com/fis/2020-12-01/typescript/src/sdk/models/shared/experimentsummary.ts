import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentState } from "./experimentstate";



// ExperimentSummary
/** 
 * Provides a summary of an experiment.
**/
export class ExperimentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=experimentTemplateId" })
  experimentTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ExperimentState;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
