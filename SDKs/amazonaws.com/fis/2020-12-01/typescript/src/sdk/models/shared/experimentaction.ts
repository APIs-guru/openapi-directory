import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentActionState } from "./experimentactionstate";


// ExperimentAction
/** 
 * Describes the action for an experiment.
**/
export class ExperimentAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionId" })
  actionId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=startAfter" })
  startAfter?: string[];

  @Metadata({ data: "json, name=state" })
  state?: ExperimentActionState;

  @Metadata({ data: "json, name=targets" })
  targets?: Map<string, string>;
}
