import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentActionStatusEnum } from "./experimentactionstatusenum";


// ExperimentActionState
/** 
 * Describes the state of an action.
**/
export class ExperimentActionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: ExperimentActionStatusEnum;
}
