import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentActionState } from "./experimentactionstate";



// ExperimentAction
/** 
 * Describes the action for an experiment.
**/
export class ExperimentAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionId" })
  actionId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=startAfter" })
  startAfter?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ExperimentActionState;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: Map<string, string>;
}
