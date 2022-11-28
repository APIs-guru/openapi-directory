import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeletionTaskFailureReasonType } from "./deletiontaskfailurereasontype";
import { DeletionTaskStatusTypeEnum } from "./deletiontaskstatustypeenum";



export class GetServiceLinkedRoleDeletionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reason?: DeletionTaskFailureReasonType;

  @SpeakeasyMetadata()
  status: DeletionTaskStatusTypeEnum;
}
