import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentActionStatusEnum } from "./experimentactionstatusenum";



// ExperimentActionState
/** 
 * Describes the state of an action.
**/
export class ExperimentActionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExperimentActionStatusEnum;
}
