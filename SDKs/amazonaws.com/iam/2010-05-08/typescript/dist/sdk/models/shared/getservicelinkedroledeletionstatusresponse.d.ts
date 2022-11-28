import { SpeakeasyBase } from "../../../internal/utils";
import { DeletionTaskFailureReasonType } from "./deletiontaskfailurereasontype";
import { DeletionTaskStatusTypeEnum } from "./deletiontaskstatustypeenum";
export declare class GetServiceLinkedRoleDeletionStatusResponse extends SpeakeasyBase {
    reason?: DeletionTaskFailureReasonType;
    status: DeletionTaskStatusTypeEnum;
}
