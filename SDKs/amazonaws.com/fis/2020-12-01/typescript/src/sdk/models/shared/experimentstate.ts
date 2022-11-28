import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentStatusEnum } from "./experimentstatusenum";



// ExperimentState
/** 
 * Describes the state of an experiment.
**/
export class ExperimentState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExperimentStatusEnum;
}
