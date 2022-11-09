import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentStatusEnum } from "./experimentstatusenum";


// ExperimentState
/** 
 * Describes the state of an experiment.
**/
export class ExperimentState extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: ExperimentStatusEnum;
}
